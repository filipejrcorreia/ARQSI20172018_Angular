import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { Router, ActivatedRoute } from '@angular/router';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receita-search',
  templateUrl: './receita-search.component.html',
  styleUrls: [ './receita-search.component.css' ]
})
export class ReceitaSearchComponent implements OnInit {
  loading = false;
  error = '';  
  model: any = {};  
  receita : Receita;
  private searchTerms = new Subject<string>();

  constructor(    private router: Router, private receitasService: ReceitasService) {}

  ngOnInit(): void {

  }

  getReceita() : void{

    this.receitasService.getReceitaById(this.model.id).subscribe(result => {
      this.loading = false;
      if(result === null){
        this.error = 'Algo correu mal!';
      }else{
        this.receita  = result;
      }
    });

  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/