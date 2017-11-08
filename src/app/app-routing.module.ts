import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PirateComponent } from './pirate/pirate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PirateDetailComponent } from './pirate-detail/pirate-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PirateDetailComponent },
  { path: 'pirates', component: PirateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
