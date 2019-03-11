import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { RepairItemComponent } from './repair-item/repair-item.component'
import { LaborFormComponent } from './labor-form/labor-form.component'
import { RepairService } from './repair-item/repair.service'
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RepairItemComponent,
    LaborFormComponent,
    InvoiceSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [RepairService],
  bootstrap: [AppComponent],
  entryComponents: [InvoiceSummaryComponent]
})
export class AppModule { }
