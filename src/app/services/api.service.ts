import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {

  }

  Carprodact(){
    return this.http.get('https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=28')
  }


  singleCar(id : number){
    return this.http.get(`https://rentcar.stepprojects.ge/api/Car/${id}`)
  }

}
