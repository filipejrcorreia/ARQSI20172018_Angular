import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

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
  receita$: Observable<Receita>;
  private searchTerms = new Subject<string>();

  constructor(private receitasService: ReceitasService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

  }

  getHero(term) : void{

    this.receita$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.receitasService.getReceitaById(term)),
    );

  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/