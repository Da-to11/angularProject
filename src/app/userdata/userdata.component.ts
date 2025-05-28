import { Component, effect } from '@angular/core';
import { SignalsService } from '../services/signals.service';

@Component({
  selector: 'app-userdata',
  imports: [],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.scss'
})
export class UserdataComponent {

  firstName : any = localStorage.getItem('firstnam')
  lastName : any = localStorage.getItem('lastnam')
  email : any = localStorage.getItem('emaill')
}
