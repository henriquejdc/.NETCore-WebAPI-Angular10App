import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
// url das apis
readonly APIUrl="http://localhost:5276/api";
readonly PhotoUrl = "http://localhost:5276/Photos/";

  constructor(private http:HttpClient) { }

  // observar para pegar a lista de departamentos
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  // passa os valores por post para adicionar departamento
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  // passa os valores por put para atualizar departamento
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  // passa os valores por delete para deletar departamento
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  // observar para pegar a lista de empregados
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  // passa os valores por post para adicionar empregado
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  // passa os valores por put para atualizar empregado
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  // passa os valores por delete para deletar empregado
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }

    // passa os valores por post para adicionar foto do empregado
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  // observar para pegar a lista de nomes dos departamentos
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
