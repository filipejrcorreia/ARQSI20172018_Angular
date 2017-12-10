import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Router, ActivatedRoute } from '@angular/router';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {
  loading = false;
  error = '';
  model: any = {};
  receita: Receita;
  private searchTerms = new Subject<string>();

  receitas: Receita[] = [];

  selectedReceita: Receita;

  constructor(private router: Router, private receitasService: ReceitasService) { }

  ngOnInit() {
    this.receitasService.getReceitas()
      .subscribe(receitas => {
        this.receitas = receitas;
        console.log(this.receitas);
      })
  }

  onSelect(receita: Receita): void {
    this.selectedReceita = receita;
  }

  alterarPrescricao() {
    this.loading = true;
    this.receitasService.atualizarReceita(this.model.id, this.model.idp, this.model.farmaco, this.model.apresentacao, this.model.quantidade)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
          console.log("Prescricao alterada");          
          this.router.navigate(['/receitas']);
        } else {
          this.error = 'Impossível alterar prescricao';
        }
      });
  }

}