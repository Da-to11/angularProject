import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {

  }

  Carprodact(){
    return this.http.get('https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=30')
  }


  singleCar(id : number){
    return this.http.get(`https://rentcar.stepprojects.ge/api/Car/${id}`)
  }


  filterGet(){
    return this.http.get('https://rentcar.stepprojects.ge/api/Car/filter?capacity=4&startYear=2005&endYear=2025&city=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&pageIndex=1&pageSize=10')
  }

}
