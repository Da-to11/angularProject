import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';
import { Car } from '../Models/car';

@Component({
  selector: 'app-purchase',
  imports: [RouterModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {

  constructor(private pur : PurchaseService){}

  cars : Car[] = []

  number : any = localStorage.getItem('number')

  ngOnInit(){
    this.pur.getPur(this.number).subscribe((resp : any) => {
      this.cars = resp
    })
  }
}
