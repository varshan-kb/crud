import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashBoardComponent } from './employee-dash-board/employee-dash-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DashComponent } from './dash/dash.component';
import { VarshanComponent } from './varshan/varshan.component';
import { PrakshComponent } from './praksh/praksh.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashBoardComponent,
    DashComponent,
    VarshanComponent,
    PrakshComponent,

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
