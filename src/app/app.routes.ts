import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooterComponent } from './footer/footer.component';
import { CarsDetailsComponent } from './home/cars-details/cars-details.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'}
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cardetail/:id', component: CarsDetailsComponent},
    {path: '**', component: ErrorpageComponent}
];
