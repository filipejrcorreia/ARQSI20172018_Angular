import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receita-detail',
  templateUrl: './receita-detail.component.html',
  styleUrls: ['./receita-detail.component.css']
})
export class ReceitaDetailComponent implements OnInit {
  @Input() receita: Receita;

  constructor(
    private route: ActivatedRoute,
    private receitasService: ReceitasService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReceita();
  }

  getReceita(): void {
    var id : string;
    id = this.route.snapshot.paramMap.get('id');
    this.receitasService.getReceita(id)
      .subscribe(receita => this.receita = receita);
  }

  goBack(): void {
    this.location.back();
  }

  /*save(): void {
    this.receitasService.updateReceita(this.hero)
      .subscribe(() => this.goBack());
  }*/
}
