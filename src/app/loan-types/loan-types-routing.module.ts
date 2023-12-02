import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { DeleteLoanTypeComponent } from './delete-loan-type/delete-loan-type.component';
import { EditLoanTypeComponent } from './edit-loan-type/edit-loan-type.component';
import { ListLoanTypesComponent } from './list-loan-types/list-loan-types.component';
import { LoanTypesComponent } from './loan-types.component';
import { SearchLoanTypeComponent } from './search-loan-type/search-loan-type.component';

const routes: Routes = [
  { path: '', component: ListLoanTypesComponent },
  { path: 'add', component: AddLoanTypeComponent },
  { path: 'edit/:id', component: EditLoanTypeComponent },
  { path: 'delete/:id', component: DeleteLoanTypeComponent },
  { path: 'search', component: SearchLoanTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanTypesRoutingModule { }
