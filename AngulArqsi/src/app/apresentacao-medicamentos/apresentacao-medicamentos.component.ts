import { Component, OnInit } from '@angular/core';
import { Apresentacao } from '../models/apresentacao';
import { ApresentacoesService } from '../services/apresentacoes.service';

@Component({
  selector: 'app-apresentacao-medicamentos',
  templateUrl: './apresentacao-medicamentos.component.html',
  styleUrls: ['./apresentacao-medicamentos.component.css']
})
export class ApresentacaoMedicamentosComponent implements OnInit {
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
