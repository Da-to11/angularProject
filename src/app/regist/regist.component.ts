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
  constructor(private rout : ActivatedRoute, private reg : LoginAndRegisterService){ }
}
