import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Apresentacao } from '../models/apresentacao';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApresentacoesService {
  private apresentacoesUrl = 'http://localhost:50609/api/Apresentacoes';
  //verificar o servidor:porta
  constructor(
    private http: HttpClient) { }
  getApresentacoes(): Observable<Apresentacao[]> {
    return this.http.get<Apresentacao[]>(this.apresentacoesUrl);
  }

}
