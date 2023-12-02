import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { DeletePaymentComponent } from './delete-payment/delete-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { PaymentsComponent } from './payments.component';
import { SearchPaymentComponent } from './search-payment/search-payment.component';

const routes: Routes = [
  { path: '', component: ListPaymentsComponent },
  { path: 'add', component: AddPaymentComponent },
  { path: 'edit/:id', component: EditPaymentComponent },
  { path: 'delete/:id', component: DeletePaymentComponent },
  { path: 'search', component: SearchPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
