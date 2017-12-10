import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Comentario } from '../models/comentario';
import { Reacao } from '../models/reacao';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class Token { token: string };

@Injectable()
export class ComentariosService {
  private reacoesUrl = 'http://localhost:50609/api/Reacoes';
  private farmacosUrl = 'http://localhost:50609/api/Farmacos';

  reacoes: Reacao[] = [];
  comentarios: Comentario[] = [];

  aux: number;

  //verificar o servidor:porta
  constructor(
    private http: HttpClient) { }
  getReacoes(): Observable<Reacao[]> {
    return this.http.get<Reacao[]>(this.reacoesUrl);
  }
  getFarmacos(): Observable<Comentario[]> {
    /*this.getReacoes()
      .subscribe(reacoes => {
        this.reacoes = reacoes;
        console.log(this.reacoes);
      })
      this.http.get<Comentario[]>(this.farmacosUrl).subscribe(comentarios => {
        this.comentarios = comentarios;
        console.log(this.comentarios);
      })
      return this.comentarios;*/
    return this.http.get<Comentario[]>(this.farmacosUrl);
  }
  /*getReceita(id: string): Observable<Receita> {
    return this.http.get<Receita>(this.receitasUrl + '/' + id, this.getHeaders());
  }*/

  comentar(farmacoId: number, descricao: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post<Token>(this.reacoesUrl, {
        descricao: descricao,
        farmacoId: farmacoId
      })
        .subscribe(data => {
          if (data) {

            observer.next(true);
          } else {

            observer.next(false);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
          console.log(err);
          //this.authentication.next(this.userInfo);
          observer.next(false);
        });

    });
  }

}