import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'films', component:FilmsComponent 
  }
];


@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
