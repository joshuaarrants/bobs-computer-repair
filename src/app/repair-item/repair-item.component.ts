import { Component, OnInit} from '@angular/core';
import { Repair } from '../repair-item/repair'
import { RepairService } from '../repair-item/repair.service'
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-repair-item',
  templateUrl: './repair-item.component.html',
  styleUrls: ['./repair-item.component.css']
})
export class RepairItemComponent implements OnInit {

  repairs: Array<Repair> = [];

  constructor (private repairService: RepairService) {
    
    this.repairs = this.repairService.getRepairs();

  }

  ngOnInit() {
  }

}
