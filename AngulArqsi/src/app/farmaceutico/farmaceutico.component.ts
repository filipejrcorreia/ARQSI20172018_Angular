import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Receita } from '../models/receita';
import {ReceitasService} from '../services/receitas.service';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: [ './farmaceutico.component.css' ]
})
export class FarmaceuticoComponent implements OnInit {
  users: User[] = [];

  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userInfo.farmaceutico
  }

}
