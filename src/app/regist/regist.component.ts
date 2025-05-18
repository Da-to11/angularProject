import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoginAndRegisterService } from '../services/login-and-register.service';

@Component({
  selector: 'app-regist',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.scss'
})
export class RegistComponent {
  constructor(private rout : ActivatedRoute, private reg : LoginAndRegisterService){ 
    
  }


  firstName : string = ""
  lastName : string = ""
  email : string = ""
  phoneNumber : string = ""
  password : string = ""




  register(){
    let registered = {
      firstname : this.firstName,
      lastname : this.lastName,
      email : this.email,
      phonenumber : this.phoneNumber,
      password : this.password
    }
    
    this.reg.Register(registered).subscribe(resp => console.log(resp))
  }
}
