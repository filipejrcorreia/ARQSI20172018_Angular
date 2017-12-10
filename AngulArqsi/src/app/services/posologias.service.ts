import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Posologia } from '../models/posologia';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApresentacoesService {
  private apresentacoesUrl = 'http://localhost:50609/api/Posologias';
  //verificar o servidor:porta
  constructor(
    private http: HttpClient) { }
  getPosologias(): Observable<Posologia[]> {
    return this.http.get<Posologia[]>(this.apresentacoesUrl);
  }

}