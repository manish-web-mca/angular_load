import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { DeletePaymentComponent } from './delete-payment/delete-payment.component';
import { SearchPaymentComponent } from './search-payment/search-payment.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    ListPaymentsComponent,
    AddPaymentComponent,
    EditPaymentComponent,
    DeletePaymentComponent,
    SearchPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
