import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Car } from '../../Models/car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-details',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.scss'
})
export class CarsDetailsComponent {

  constructor(private rout : ActivatedRoute, private api : ApiService){
    this.rout.params.subscribe(car  => {
      console.log(car['id'])
      this.cardId = car['id']
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

}
