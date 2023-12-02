import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanTypesRoutingModule } from './loan-types-routing.module';
import { LoanTypesComponent } from './loan-types.component';
import { ListLoanTypesComponent } from './list-loan-types/list-loan-types.component';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { EditLoanTypeComponent } from './edit-loan-type/edit-loan-type.component';
import { DeleteLoanTypeComponent } from './delete-loan-type/delete-loan-type.component';
import { SearchLoanTypeComponent } from './search-loan-type/search-loan-type.component';


@NgModule({
  declarations: [
    LoanTypesComponent,
    ListLoanTypesComponent,
    AddLoanTypeComponent,
    EditLoanTypeComponent,
    DeleteLoanTypeComponent,
    SearchLoanTypeComponent
  ],
  imports: [
    CommonModule,
    LoanTypesRoutingModule
  ]
})
export class LoanTypesModule { }
