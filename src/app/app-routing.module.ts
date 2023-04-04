import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeComponent} from './Component/add-employee/add-employee.component';
import { ListEmployeeComponent } from './Component/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';



const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'employees/:id', component: UpdateEmployeeComponent },
  { path: 'addEmp', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
