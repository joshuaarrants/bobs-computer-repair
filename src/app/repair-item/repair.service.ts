import { Injectable } from '@angular/core';
import { Repair } from './repair';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  getRepairs() : Repair [] {
    return this.repairs.map (r => new Repair(r.name, r.price, r.description));
  }

  repairs: Repair[] = [
    {  
      name: "Password Reset", 
      price: 39.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    { 
      name: "Spyware Removal", 
      price: 99.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {  
      name: "RAM Upgrade", 
      price: 129.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      name: "Software Installation", 
      price: 49.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    { 
      name: "Tune-Up", 
      price: 89.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    { 
      name: "Keyboard Cleaning", 
      price: 45.00,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    { 
      name: "Disk Clean-Up", 
      price: 149.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
}
