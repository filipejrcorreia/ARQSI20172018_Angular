import { Component, OnInit } from '@angular/core';

import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service';
import { Prescricao } from '../models/prescricao';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent implements OnInit {
  prescricoes: Prescricao[] = [];
  presc = false;
  model: any = {};
  loading = false;
  error = '';
  constructor(private receitasService: ReceitasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  criarReceita() {
    /*this.loading = true;
    this.receitasService.criarReceita(this.model.nomeUtente, this.model.farmaco,
    this.model.quantidade, this.model.validade, this.model.apresentacao, this.model.posologiaPrescrita)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/receitas']);
        } else {
          this.error = 'Impossível criar receita';
        }
      });*/
    this.loading = true;
    this.receitasService.criarReceita(this.model.nomeUtente,/* this.model.farmaco,
      this.model.quantidade, this.model.validade, this.model.apresentacao, this.model.posologiaPrescrita, */this.prescricoes)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          console.log("CRIADA");          
          this.router.navigate(['/receitas']);
        } else {
          this.error = 'Impossível criar receita';
        }
      });
  }

  adicionarPrescricao() {
    this.presc = false;
    this.prescricoes.push({
      "_id" : undefined,      
      "farmaco": this.model.farmaco,
      "quantidade": this.model.quantidade,
      "validade": this.model.validade,
      "apresentacao": this.model.apresentacao,
      "apresentacaoID": undefined,
      "posologiaPrescrita": this.model.posologiaPrescrita,
      "posologiaID": undefined,
      "aviamento": [undefined]
    });
    this.presc = true;
  };

}
/**add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.receitasService.addReceita({ name } as Receita)
      .subscribe(receita => {
        this.receitas.push(receita);
      });
  }*/
