import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Car } from '../Models/car';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api : ApiService, ){

  }

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

  Capa : string = ""
  city : string = ""
  startyear : string = ""
  endyear : string = ""

 





}
