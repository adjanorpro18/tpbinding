import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import {Routes, RouterModule } from '@angular/router';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'films', component: FilmsComponent
  }
];


@NgModule({
  declarations: [FilmsComponent, SearchformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
