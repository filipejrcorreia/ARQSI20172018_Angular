import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Comentario } from '../models/comentario';
import { Reacao } from '../models/reacao';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ComentariosService {
  private reacoesUrl = 'http://localhost:50609/api/Reacoes';
  private farmacosUrl = 'http://localhost:50609/api/Farmacos';
  //verificar o servidor:porta
  constructor(
    private http: HttpClient) { }
  getReacoes(): Observable<Reacao[]> {
    return this.http.get<Reacao[]>(this.reacoesUrl);
  }
  getFarmacos(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.farmacosUrl);
  }
  /*getReceita(id: string): Observable<Receita> {
    return this.http.get<Receita>(this.receitasUrl + '/' + id, this.getHeaders());
  }*/

}