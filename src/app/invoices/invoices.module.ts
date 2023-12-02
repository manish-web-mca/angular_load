import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';
import { SearchInvoiceComponent } from './search-invoice/search-invoice.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    ListInvoicesComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
    DeleteInvoiceComponent,
    SearchInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
