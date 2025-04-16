import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';



export const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'inversement', component:InvestmentDetailsComponent
  }
];
