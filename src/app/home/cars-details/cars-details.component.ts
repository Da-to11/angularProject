import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Car } from '../../Models/car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-cars-details',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.scss'
})
export class CarsDetailsComponent {

  constructor(private rout : ActivatedRoute, private api : ApiService, private pur : PurchaseService){
    this.rout.params.subscribe(car  => {
      console.log(car['id'])
      this.cardId = car['id']
      localStorage.setItem('carid', car['id'])
    })

  }

  cardId = 0


  carProducts : Car = new Car


  ngOnInit(){
    this.api.singleCar(this.cardId).subscribe((car : any) => {
      console.log(car)
      this.carProducts = car
    })
  }





  Number : any 
  mut : number = 0
  carunia : any


  buy(){

    this.Number = localStorage.getItem('number')
    this.mut = 1
    this.carunia = localStorage.getItem('carid')


    this.pur.purchasee(this.Number, this.carunia, this.mut).subscribe((resp : any) => {
      console.log(resp)

    
    })

    if(this.Number){
      alert('წარმატებით შეძენა')
    }

    else{
      alert('გთხოვთ გაიაროთ ავტორისაცია')
    }

  }


}
