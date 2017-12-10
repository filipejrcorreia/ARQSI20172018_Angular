import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Receita } from '../models/receita';
import {ReceitasService} from '../services/receitas.service';


@Component({
  selector: 'app-farmaceutico',
  templateUrl: './paciente.component.html',
  styleUrls: [ './paciente.component.css' ]
})
export class PacienteComponent implements OnInit {
  users: User[] = [];
  receitas : Receita[];
  selectedUser: User;

  constructor(private userService: UserService, private receitasService: ReceitasService) { }

  ngOnInit() {

    this.getReceitas();
    
  }

  getReceitas(){
   this.receitasService.getReceitas().subscribe(result => this.receitas  = result);

  }

}