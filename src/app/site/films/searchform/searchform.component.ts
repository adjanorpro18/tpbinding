import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder ) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.searchForm = this.fb.group({
      title: '',
      year: 2018
    });
  }

  // tslint:disable-next-line:typedef
  startSearch(){
    console.log(' Recherche lancée ');
  }

}
