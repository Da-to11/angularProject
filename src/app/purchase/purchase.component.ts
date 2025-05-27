import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';
import { paicar } from '../Models/car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {

  constructor(private pur : PurchaseService){}

  cars2 : paicar[] = []

  number : any 

  ngOnInit(){

    this.number =  localStorage.getItem('number')
    this.pur.getPur(this.number).subscribe((resp : any) => {
      console.log(resp)
      this.cars2 = resp
    })
  }
}
