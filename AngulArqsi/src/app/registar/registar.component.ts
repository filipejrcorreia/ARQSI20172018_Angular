import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  constructor(private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    //this.authenticationService.logout();

    /**this.activatedRoute.params.subscribe(params => {
      if (params['u'] !== undefined) {
        ;
        this.error = 'Your user cannot access receitas';
      }
    });*/

  }

  registar() {
    this.loading = true;
    this.userService.registar(this.model.nome, this.model.email,
      this.model.password)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }
}