import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee.model';
import { MyDataServiceService } from 'src/app/Service/my-data-service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new Employee  ;


  constructor(private employeeService :MyDataServiceService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addEmployee(employee:any):void{
    this.employeeService.addEmployee(employee)
    .subscribe({
      next:(res) =>{
        console.log(res);
        this.router.navigate(['employees']);
      },
      error:(e) => console.log(e)
    });

  }

}
