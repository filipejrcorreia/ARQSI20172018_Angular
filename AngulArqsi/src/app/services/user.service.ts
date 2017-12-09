import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user';

class Token { token: string };


@Injectable()
export class UserService {
  private userUrl = 'http://localhost:8080/Users/Registar';
  //verificar o servidor:porta
  public userInfo: User;
  //authentication: Subject<User> = new Subject<User>();
  constructor(
    private http: HttpClient
  ) { }
  registar(nome: string, email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post<Token>(this.userUrl, {
        nome: nome,
        email: email,
        password: password
      })
        .subscribe(data => {
          if (data) {
            //const tokenDecoded = jwt_decode(data.token);

            observer.next(true);
          } else {

            observer.next(false);
          }/**observer.next(true);*/
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