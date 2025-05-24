import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private vps : ViewportScroller){

  }


  scrol(){
    this.vps.scrollToAnchor('footer')
  }

  


  

  logout(){
    localStorage.removeItem('token')
    
  }
  

}
