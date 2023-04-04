import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyDataServiceService } from './Service/my-data-service.service';
import { MatCardModule } from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { ListEmployeeComponent } from './Component/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],

  

  providers: [MyDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
