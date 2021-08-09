import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployee(data:any) {

    return this.http.post<any>/*("http://localhost:3000/posts/",data)*/("https://localhost:44390/api/Employee/add",data)
    .pipe(map((res:any) =>{
      return res;

   }))  
  }
  

  getEmployee(){ /*:Observable<any[]> {
      return this.http.get<any[]>("https://localhost:44390/api/Employee/Get");
  
    }*/
    return this.http.get<any>("https://localhost:44390/api/Employee/Get")//("http://localhost:3000/posts/")
    .pipe(map((res:any) =>{
      return res;

   }))  
  }
  updateEmployee(data:any,id:number)
  {

    return this.http.put<any>("https://localhost:44390/api/Employee/update/"+id,data)/*("http://localhost:3000/posts/"+id,data)*/
    .pipe(map((res:any) =>{
      return res;

   })) 
  } 

   deleteEmployees(id:any){

    return this.http.delete<any>/*("http://localhost:3000/posts/"+id )*/("https://localhost:44390/api/Employee/Delete/"+id)
    .pipe(map((res:any) =>{
      return res;

   }))  
  }
  
}
