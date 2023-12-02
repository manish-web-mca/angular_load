import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoicesComponent } from './invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { SearchInvoiceComponent } from './search-invoice/search-invoice.component';

const routes: Routes = [
  { path: '', component: ListInvoicesComponent },
  { path: 'add', component: AddInvoiceComponent },
  { path: 'edit/:id', component: EditInvoiceComponent },
  { path: 'delete/:id', component: DeleteInvoiceComponent },
  { path: 'search', component: SearchInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
