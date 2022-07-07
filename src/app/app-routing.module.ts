import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ReferredCoachComponent } from './ReferredCoach/referredCoach.component';

// import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: '', redirectTo: '/referred-coach', pathMatch: 'full' },
  { path: 'referred-coach', component: ReferredCoachComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }