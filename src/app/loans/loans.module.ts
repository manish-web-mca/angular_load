import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { DeleteLoanComponent } from './delete-loan/delete-loan.component';
import { SearchLoanComponent } from './search-loan/search-loan.component';


@NgModule({
  declarations: [
    LoansComponent,
    ListLoansComponent,
    AddLoanComponent,
    EditLoanComponent,
    DeleteLoanComponent,
    SearchLoanComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
