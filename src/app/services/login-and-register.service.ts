import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterService {

  constructor(private loginRegister : HttpClient) { }


  Register(obj : any){
    return this.loginRegister.post(`https://rentcar.stepprojects.ge/api/Users/register`, obj)
  }


  login(loged : any){
    return this.loginRegister.post('https://rentcar.stepprojects.ge/api/Users/login', loged)
  }




//   {
//   "phoneNumber": "41241515123",
//   "password": "string",
//   "email": "string",
//   "firstName": "string",
//   "lastName": "string",
//   "role": "string"
// }



}
