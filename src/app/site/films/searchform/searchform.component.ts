import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../form-validators';
import { SearchmovieService } from '../services/searchmovie.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  searchForm: FormGroup;
  title: FormControl;
  year: FormControl;
  results: any;
  errors: string;

  constructor(private fb: FormBuilder, // la fabrique de l'instance group
              private searchMovie: SearchmovieService  // service movie
              ) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){

    // tslint:disable-next-line:prefer-const
    let titlePattern = '[a-zA-Z0-9,\.]+';
    // tslint:disable-next-line:prefer-const
    let yearPattern = '[0-9]{4}';

    this.title = this.fb.control(
      '', [Validators.required, Validators.maxLength(30), Validators.pattern(titlePattern) ]
    );
    this.year = this.fb.control(
      2018, [Validators.pattern(yearPattern), FormValidators.intergerBetween(1900, 2022)]
    );

    this.searchForm = this.fb.group({
      title: this.title,
      year: this.year
    });
  }

  // tslint:disable-next-line:typedef
  startSearch(){

    const title = this.title.valid ? this.title.value : null;
    const year = this.year.valid ? this.year.value : null;
    const that = this;

    /* *référence vers l'objet courant :
    à cause de la portée des variables dans les Arrow fucntions et les fin de bloc {} (closures) */

    const action = (data: any) => {
      if (data.Error){
        that.errors = data.Error;
        that.results = '';
      }
      else{
        that.errors = '';
        that.results = data;
      }

      console.log(data);
    };
    // tslint:disable-next-line:curly
    if (title)
        this.searchMovie.search(action, title, year);
      else {
        this.errors = 'Titre non obligatoire !';
      }

  }

}
