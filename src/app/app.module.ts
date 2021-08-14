import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashBoardComponent } from './employee-dash-board/employee-dash-board.component';
//import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashBoardComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
