import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee.model';
import { MyDataServiceService } from 'src/app/Service/my-data-service.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  @Input() viewMode = false;
  @Input() currentEmp : Employee | any;

  employee = new Employee  ;

  message : '' | undefined;
  published: any;

  constructor(private EmpService : MyDataServiceService,private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void { 
    if (!this.viewMode) {
      this.message = '';       
      this.getEmployee(this.activatedRoute.snapshot.params["id"]);

    }
  }
  getEmployee(id: any): void {
    this.EmpService.getEmployeeById(id)
      .subscribe({
        next: (data:any) => {
          this.currentEmp = data;
          // console.log(data);
        },
        error: (e:any) => console.error(e)
      });
  }
  deleteEmployee(id:any): void {
    this.EmpService.deleteEmployee(id)
      .subscribe({
        next: (res:any) => {
          // console.log(res);
          this.router.navigate(['employees']);
        },
        error: (e:any) => console.error(e)
      });
  }

  
  updateEmployee():void{
    console.log("this employee pass",this.currentEmp);
    
    this.EmpService.editEmployeeById(this.currentEmp._id,this.currentEmp)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.router.navigate(['employees']);
        },
        error: (e) => console.error(e)
      });
  }
  
  

  
  
}
