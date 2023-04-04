import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Model/employee.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(empArray: [],searchEmp:string): any {
    if(!searchEmp){
      const msg = "No employee found";
      return msg;
    }
    else {
      searchEmp = searchEmp.toLowerCase();
      return empArray.filter( (x: string) => x.toLowerCase().includes(searchEmp) ) ;
    }
   
  }

}
