import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Receita } from '../models/receita';
import { AuthenticationService } from './authentication.service';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ReceitasService {
  private receitasUrl = 'http://localhost:8080/Receita';
  //verificar o servidor:porta
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }
  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.receitasUrl,
      this.getHeaders());
  }
  getHeaders() {
    let headers = new HttpHeaders({
      'x-access-token':
        this.authenticationService.userInfo.token
    });

    let httpOptions = {
      headers: headers
    };
    return httpOptions;
  }
  
  getReceitaById(receita_id: string): Observable<Receita>{
    if (!receita_id.trim()) {
      // if not search term, return empty hero array.
      return of(null);
    }

    const url = '${this.receitasUrl}/${receita_id}';
    return this.http.get<Receita>(url, this.getHeaders());
  }


  /** GET hero by id. Return `undefined` when id not found */
 /**getHeroNo404<Data>(id: number): Observable<Receita> {
    const url = `${this.receitasUrl}/?id=${id}`;
    return this.http.get<Receita[]>(url)
      .pipe(
      map(receitas => receitas[0]), // returns a {0|1} element array
      tap(r => {
        const outcome = r ? `fetched` : `did not find`;
        this.log(`${outcome} receita id=${id}`);
      }),
      catchError(this.handleError<Receita>(`getReceita id=${id}`))
      );
  }*/

  /** GET hero by id. Will 404 if id not found */
  /**getHero(id: number): Observable<Receita> {
    const url = `${this.receitasUrl}/${id}`;
    return this.http.get<Receita>(url).pipe(
      tap(_ => this.log(`fetched receita id=${id}`)),
      catchError(this.handleError<Hero>(`getReceita id=${id}`))
    );
  }*/

}
