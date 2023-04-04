import { Injectable,NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@NgModule({
  providers: [ MyDataServiceService ],
})
@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {

  //Main api to call employees
  api = 'http://localhost:4000/employees';

  constructor(private httpClient : HttpClient) { }

  //To get the employee
  getEmployees():Observable<any>{
    return this.httpClient.get(`${this.api}`);
  }

  getEmployeeById(empid: any):Observable<any>{
    return this.httpClient.get(`${this.api}/${empid}`)
  }

  //edit employeebyId
  editEmployeeById(empid: any,body: any):Observable<any> {
    return this.httpClient.put(`${this.api}/editEmp/${empid}`, body);
  }

  //add Employee
  addEmployee(body: any):Observable<any>{
    return this.httpClient.post(`${this.api}/addEmp`,body);
  }

  //delete Employee
  deleteEmployee(id:any):Observable<any>{
    return this.httpClient.delete(`${this.api}/deleteEmp/${id}`);
  }

}
