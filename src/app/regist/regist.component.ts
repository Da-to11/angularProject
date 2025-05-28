import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginAndRegisterService } from '../services/login-and-register.service';

@Component({
  selector: 'app-regist',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.scss'
})
export class RegistComponent {
  constructor(private rout : ActivatedRoute, private reg : LoginAndRegisterService, private router : Router){ 
    
  }


  firstName : string = ""
  lastName : string = ""
  email : string = ""
  phoneNumber : string = ""
  password : string = ""




  register(){
    let registered = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      phoneNumber : this.phoneNumber.toString(),
      password : this.password
    }
    
    this.reg.Register(registered).subscribe(resp => {
      console.log(resp)
      
    })

    this.firstName = ""
    this.lastName = ""
    this.email = ""
    this.phoneNumber = ""
    this.password = ""

    this.router.navigate(['/login'])
  }
}
