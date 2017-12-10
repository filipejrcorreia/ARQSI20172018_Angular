import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {
  @Input() receita: Receita;

  constructor(
    private route: ActivatedRoute,
    private receitasService: ReceitasService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
}
