import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Receita } from '../models/receita';
import { ReceitasService } from '../services/receitas.service';
import { Prescricao } from '../models/prescricao';

 
@Component({
  selector: 'app-prescricao-detail',
  templateUrl: './prescricao-detail.component.html',
  styleUrls: ['./prescricao-detail.component.css']
})
export class PrescricaoDetailComponent implements OnInit {
  @Input() receita: Receita;
  @Input() prescricao: Prescricao;
  model: any = {};  
  id_Receita : string;
  id_Prescricao : string;
  

  constructor(
    private route: ActivatedRoute,
    private receitasService: ReceitasService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReceita();
    this.getPrescricao();
  }

  getReceita(): void{
    var id : string;
    id = this.route.snapshot.paramMap.get('id');
    this.receitasService.getReceita(id)
      .subscribe(receita => this.receita = receita);
  }

  getPrescricao(): void {
    
    this.id_Receita = this.route.snapshot.paramMap.get('id');
    this.id_Prescricao = this.route.snapshot.paramMap.get('id2');
    this.receitasService.getPrescricao(this.id_Receita, this.id_Prescricao)
      .subscribe(prescricao => this.prescricao = prescricao);

  }

  aviar() : void{
    this.receitasService.aviarPrescricao( this.receita._id, this.prescricao._id,this.model.qtd).subscribe(prescricao => this.prescricao = prescricao);
    ;
  }


  goBack(): void {
    this.location.back();
  }

  /*save(): void {
    this.receitasService.updateReceita(this.hero)
      .subscribe(() => this.goBack());
  }*/
}
