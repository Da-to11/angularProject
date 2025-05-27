import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  constructor() { 
    localStorage.getItem('token') ? this.loged.set(true) : this.loged.set(false)
  }


  loged = signal(false)


  logIn(){
    this.loged.set(true)
  }

  logedOut(){
    this.loged.set(false)
  }
}
