import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchmovieService } from '../services/searchmovie.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private searchMovie: SearchmovieService ) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.searchForm = this.fb.group({
      title: '',
      year: 2018
    });
  }

  // tslint:disable-next-line:typedef
  startSearch(){
    let action = (data: Object) => {
      console.log(data);
    };
    this.searchMovie.search(action, 'test');
  }

}
