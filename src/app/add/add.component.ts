import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { EmployeeModel } from '.employee-dash board/employee-dash board.model';
import { EmployeeModel } from '../employee-dash-board/employee-dash board.model';
import { ApiService } from '../shared/api.service';
import { EmployeeDashBoardComponent } from '../employee-dash-board/employee-dash-board.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
employeeModelobj: EmployeeModel = new EmployeeModel();
  constructor(private api: ApiService,private employeeDashBoardComponent:EmployeeDashBoardComponent) { }
  formValue = new FormGroup({
    //id: new FormControl(''),
    firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z ]*$')]),
    lastname: new FormControl('', [Validators.required/* , Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z ]*$') */]),
    emailid: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(80),
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    salary: new FormControl(''),

    /* form: FormGroup = new FormGroup({});  
    constructor(private fb: FormBuilder) {  
     this.form = fb.group({  
       mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
     })  
   }   */

  });
  get firstname(){
    return this.formValue.get('firstname')
  }
  get lastname(){
    return this.formValue.get('firstname')
  }
  get mobileNumber(){
    return this.formValue.get('mobileNumber')
  }

  ngOnInit(): void {
  }
  postEmployeeDetails() {
    //this.employeeModelobj.id = this.formValue.value.id;
    //this.employeeModelobj.firstname = this.formValue.value.firstname;
    this.employeeModelobj.firstname = this.formValue.value.firstname;
    this.employeeModelobj.lastname = this.formValue.value.lastname;
    this.employeeModelobj.emailid = this.formValue.value.emailid;
    this.employeeModelobj.mobilenumber = this.formValue.value.mobileNumber;
    this.employeeModelobj.salary = this.formValue.value.salary;
    this.api.postEmployee(this.employeeModelobj)
      .subscribe((response: any) => {
        console.log(response);
        alert("Employee Added Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.employeeDashBoardComponent.getAllEmployee();
      },

        (error) => {
          alert("Something went wrong");
        });
  }
}
