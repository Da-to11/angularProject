import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CarsDetailsComponent } from './home/cars-details/cars-details.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { UserdataComponent } from './userdata/userdata.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'}
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cardetail/:id', component: CarsDetailsComponent},
    {path: 'register', component: RegistComponent},
    {path: 'login', component: LoginComponent},
    {path: 'purchase', component: PurchaseComponent},
    {path: 'userdata', component: UserdataComponent},
    {path: '**', component: ErrorpageComponent}
];
