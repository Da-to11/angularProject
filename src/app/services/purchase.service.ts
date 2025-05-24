import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private purchase : HttpClient) { }



  purchasee(){
    this.purchase.post(`https://rentcar.stepprojects.ge/Purchase/purchase?phoneNumber=1234123412345&carId=520&multiplier=1`, null)
  }


  getPur(){
    this.purchase.get('https://rentcar.stepprojects.ge/Purchase/1234123412345')
  }

}
