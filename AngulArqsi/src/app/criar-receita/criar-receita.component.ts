import { Component, OnInit } from '@angular/core';

import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service'

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.css']
})
export class CriarReceitaComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  constructor(private receitasService: ReceitasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  criarReceita() {
    this.loading = true;
    this.receitasService.criarReceita(this.model.nomeUtente, this.model.farmaco,
    this.model.quantidade, this.model.validade)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          this.router.navigate(['/receitas']);
        } else {
          this.error = 'Impossível criar receita';
        }
      });
  }
}
/**add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.receitasService.addReceita({ name } as Receita)
      .subscribe(receita => {
        this.receitas.push(receita);
      });
  }*/
