import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import {Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchmovieService } from './services/searchmovie.service';
import { ListDirective } from './directive/list.directive';

const routes: Routes = [
  {
    path: 'films', component: FilmsComponent
  }
];


@NgModule({
  declarations: [FilmsComponent, SearchformComponent, ListDirective],
  providers: [SearchmovieService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
