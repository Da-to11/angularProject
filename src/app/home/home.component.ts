import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Car } from '../Models/car';
import { ApiService } from '../services/api.service';
import { PurchaseComponent } from '../purchase/purchase.component';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api : ApiService, private rout : ActivatedRoute, private pur : PurchaseService ){
    this.rout.params.subscribe(resp => {
      console.log(resp['id'])
      this.carID = resp['id']
    })
  }

  carID = 0


  cars : Car[] = []

  // Carprodact2(){
  //   this.api.Carprodact().subscribe((data : any) => {
  //     console.log(data)
  //     this.cars = data
  //   })
  // }



  ngOnInit(){
    this.api.Carprodact().subscribe((data : any) => {
      console.log(data)
      this.cars = data.data
    })
  }

  capaCity : string = ""
  city : string = ""
  startYear : string = ""
  endYear : string = ""

 

  filterFunc(){
    this.api.filterGet(this.capaCity, this.city, this.startYear, this.endYear).subscribe((filterd : any) => {
      this.cars = filterd.data
    })
  }

  clear(){
      this.api.Carprodact().subscribe((data : any) => {
      console.log(data)
      this.cars = data.data
    })

    this.capaCity = ""
    this.city = ""
    this.startYear = ""
    this.endYear = ""
  }

  Number : any = localStorage.getItem('number')
  
  mut : number = 1

  buy(){
    this.pur.purchasee(this.Number, this.carID, this.mut).subscribe((resp : any) => {
      console.log(resp)
      this.cars = resp
    })
  }




}
