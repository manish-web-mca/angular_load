import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { DeleteLoanComponent } from './delete-loan/delete-loan.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { LoansComponent } from './loans.component';
import { SearchLoanComponent } from './search-loan/search-loan.component';

const routes: Routes = [
  { path: '', component: ListLoansComponent },
  { path: 'add', component: AddLoanComponent },
  { path: 'edit/:id', component: EditLoanComponent },
  { path: 'delete/:id', component: DeleteLoanComponent },
  { path: 'search', component: SearchLoanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
