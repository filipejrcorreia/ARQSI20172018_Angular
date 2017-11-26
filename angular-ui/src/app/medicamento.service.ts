import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';

import {Medicamento} from './medicamento';

import {MEDICAMENTOS} from './mock-medicamentos';

@Injectable()
export class MedicamentoService {
  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<Medicamento[]> {
    //return this.http.get<Medicamento[]>('http://localhost:50609/api/Medicamentos');
    return of(MEDICAMENTOS);
  }

  getMedicamento(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>('http://localhost:50609/api/Medicamentos/' + id);
  }
}
