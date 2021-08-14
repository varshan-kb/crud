import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeModel } from './employee-dash board.model';
import { ApiService } from '../shared/api.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AddComponent } from '../add/add.component';


@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent implements OnInit {

  /* formValue !: FormGroup; */
  //Currentbranchid:any;
 searchenddate: any = '';
 employeeModelobj: EmployeeModel = new EmployeeModel();
  // api: any;
  employeeData: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private addComponent:AddComponent) { }

  
  ngOnInit(): void {
    
    /* this.formValue = this.formbuilder.group({
      id: '',
      firstname: [' '],
      lastname: [' '],
      emailid: [' '],
      mobileno: '',
      salary: '',
   }) */
    this.getAllEmployee();
  }
  
  //branch_name_change(branchid:any) {
  //this.Currentbranchid = branchid;
  //}
 

  getAllEmployee() {

    try {
      this.api.getEmployee()
        .subscribe((response: any) => {
          this.employeeData = response;
        });
    }
    catch (Exception) {
      throw new Exception(Message);
    }

  }
  deleteEmployee(row: any) {
    /*this.api.deleteEmployees(row.id)
      .subscribe(response => {
        if (confirm("Are you sure to delete " + this.formValue.value.firstname)) {
          console.log("Employee data deleted");
          alert("Employee Data Deleted");
          this.getAllEmployee();
        }
        else{
          this.getAllEmployee();
        }
      });*/
    if (confirm("Are you sure to delete " + this.addComponent.formValue.value.firstname)) {
      this.api.deleteEmployees(row.id)
        .subscribe(response => {
          alert("Employee Data Deleted");
          this.getAllEmployee();
        });
    }
    else {
      this.getAllEmployee();
    }
  }
  onEdit(row: any) {

    //this.showAdd = false;
    //this.showUpdate = true;

    this.employeeModelobj.id = row.id;
    //this.formValue.controls['id'].setValue(row.id);
    this.addComponent.formValue.controls['firstname'].setValue(row.firstname);
    this.addComponent.formValue.controls['lastname'].setValue(row.lastname);
    this.addComponent.formValue.controls['emailid'].setValue(row.emailid);
    this.addComponent.formValue.controls['mobileNumber'].setValue(row.mobilenumber);
    this.addComponent.formValue.controls['salary'].setValue(row.salary);
  }

  resetEmployeeDetails() {

    this.addComponent.formValue.reset();

  }
  updateEmployeeDetails() {

    //this.employeeModelobj.id = this.formValue.value.id;
    this.employeeModelobj.firstname = this.addComponent.formValue.value.firstname;
    this.employeeModelobj.lastname = this.addComponent.formValue.value.lastname;
    this.employeeModelobj.emailid = this.addComponent.formValue.value.emailid;
    this.employeeModelobj.mobilenumber = this.addComponent.formValue.value.mobileno;
    this.employeeModelobj.salary = this.addComponent.formValue.value.salary;

    this.api.updateEmployee(this.employeeModelobj, this.employeeModelobj.id)

      .subscribe((response: any) => {
        console.log(response);
        alert("Updated Successfully")
        this.addComponent.formValue.reset();
        let ref1 = document.getElementById('cancel1');
        ref1?.click();
        this.getAllEmployee();
      });

  }

}
