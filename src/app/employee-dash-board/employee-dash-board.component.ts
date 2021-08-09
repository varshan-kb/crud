import { Component, OnInit ,ErrorHandler} from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeModel } from './employee-dash board.model';
import {ApiService} from '../shared/api.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent implements OnInit {

  formValue !: FormGroup;
  //Currentbranchid:any;
  searchenddate:any='';
  employeeModelobj : EmployeeModel = new EmployeeModel();
 // api: any;
  employeeData: any;
  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailid: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    mobileno: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
   });
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: '',
      firstname: [' '],
      lastname: [' '],
      emailid: [' '],
      mobileno: '',
      salary: '',
   })
   this.getAllEmployee();
  }
  //branch_name_change(branchid:any) {
    //this.Currentbranchid = branchid;
  //}
  postEmployeeDetails(){
    this.employeeModelobj.id = this.formValue.value.id;
    this.employeeModelobj.firstname = this.formValue.value.firstname;
    this.employeeModelobj.lastname = this.formValue.value.lastname;
    this.employeeModelobj.emailid = this.formValue.value.emailid;
    this.employeeModelobj.mobilenumber = this.formValue.value.mobileno;
    this.employeeModelobj.salary = this.formValue.value.salary;
    this.api.postEmployee(this.employeeModelobj)
     .subscribe((response: any)=>{
      console.log(response);
      alert("Employee Added Successfully") 
      this.formValue.reset();
      let ref=document.getElementById('cancel');
      ref?.click();
      this.getAllEmployee();
    },

      (error)=>{
      alert ("Something went wrong");
    });
  }

  getAllEmployee(){
 
    try {
      this.api.getEmployee()
        .subscribe((response: any) => {
          this.employeeData = response;
        });
    }
    catch (Exception)
    {
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
      if (confirm("Are you sure to delete " + this.formValue.value.firstname)) {
        this.api.deleteEmployees(row.id)
        .subscribe(response => {
          alert("Employee Data Deleted");
          this.getAllEmployee();
        });
      }
      else{
        this.getAllEmployee();
      }
  }
  onEdit(row: any){

    //this.showAdd = false;
    //this.showUpdate = true;

 this.employeeModelobj.id = row.id;
 this.formValue.controls['id'].setValue (row.id);
 this.formValue.controls['firstname'].setValue (row.firstname);
 this.formValue.controls['lastname'].setValue (row.lastname);
 this.formValue.controls['emailid'].setValue (row.emailid);
 this.formValue.controls['mobileno'].setValue (row.mobilenumber);
 this.formValue.controls['salary'].setValue (row.salary);
}

resetEmployeeDetails(){

this.formValue.reset();

}
updateEmployeeDetails()
{

    this.employeeModelobj.id = this.formValue.value.id;
    this.employeeModelobj.firstname = this.formValue.value.firstname;
    this.employeeModelobj.lastname = this.formValue.value.lastname;
    this.employeeModelobj.emailid = this.formValue.value.emailid;
    this.employeeModelobj.mobilenumber = this.formValue.value.mobileno;
    this.employeeModelobj.salary = this.formValue.value.salary;

    this.api.updateEmployee(this.employeeModelobj, this.employeeModelobj.id)

      .subscribe((response: any)=>{
        console.log(response);
        alert("Updated Successfully")
        this.formValue.reset();
        let ref1 = document.getElementById('cancel1');
        ref1?.click();
        this.getAllEmployee();
      });

  }
  
}
