import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginAndRegisterService } from '../services/login-and-register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';
import { SignalsService } from '../services/signals.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private log : LoginAndRegisterService, private signal : SignalsService, private router : Router){

  }

  


    firstName : string = ""
    lastName : string = ""
    email : string = ""
    phoneNumber : string = ""
    password : string = ""


    logIn(){

    let registered = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      phoneNumber : this.phoneNumber.toString(),
      password : this.password
    }
    


    this.log.login(registered).subscribe((user : any) => {
      console.log(user)
      localStorage.setItem('token', user.token)
      localStorage.setItem('number', user.phoneNumber)
      localStorage.setItem('emaill', user.email)
      localStorage.setItem('firstnam', user.firstName)
      localStorage.setItem('lastnam', user.lastName)
      this.signal.logIn()
    })

    
    this.firstName = ""
    this.lastName = ""
    this.email = ""
    this.phoneNumber = ""
    this.password = ""

    this.router.navigate(['/home'])

    }


}
