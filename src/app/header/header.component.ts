import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignalsService } from '../services/signals.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private vps : ViewportScroller, private signal : SignalsService){
    effect(() => {
      this.aut = this.signal.loged()
    })
  }


  aut = false

  scrol(){
    this.vps.scrollToAnchor('footer')
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('number')
    this.signal.logedOut()
  }
  

}
