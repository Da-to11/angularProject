import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private purchase : HttpClient) { }



  purchasee(usernumber : any, carID : number, mult : number ){
    return this.purchase.post(`https://rentcar.stepprojects.ge/Purchase/purchase?phoneNumber=${usernumber}&carId=${carID}&multiplier=${mult}`, null)
  }


  getPur(usernumber : string){
    return this.purchase.get(`https://rentcar.stepprojects.ge/Purchase/${usernumber}`)
  }

}
