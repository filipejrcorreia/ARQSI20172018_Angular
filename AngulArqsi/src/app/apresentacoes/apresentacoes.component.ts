import { Component, OnInit } from '@angular/core';
import { Apresentacao } from '../models/apresentacao';
import { ApresentacoesService } from '../services/apresentacoes.service';

@Component({
  selector: 'app-apresentacoes',
  templateUrl: './apresentacoes.component.html',
  styleUrls: ['./apresentacoes.component.css']
})
export class ApresentacoesComponent implements OnInit {
  apresentacoes: Apresentacao[] = [];

  selectedApresentacao: Apresentacao;

  constructor(private apresentacoesService: ApresentacoesService) { }

  ngOnInit() {
    this.apresentacoesService.getApresentacoes()
      .subscribe(apresentacoes => {
        this.apresentacoes = apresentacoes;
        console.log(this.apresentacoes);
      })
  }

  onSelect(apresentacao: Apresentacao): void {
    this.selectedApresentacao = apresentacao;
  }

}
