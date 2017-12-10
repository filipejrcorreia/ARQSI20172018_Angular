import { Component, OnInit } from '@angular/core';
import { Comentario } from '../models/comentario';
import { ComentariosService } from '../services/comentarios.service';
import { Reacao } from '../models/reacao';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios: Comentario[] = [];

  reacoes: Reacao[] = [];

  selectedComentario: Comentario;

  selectedReacao: Reacao;

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosService.getReacoes()
      .subscribe(reacoes => {
        this.reacoes = reacoes;
        console.log(this.reacoes);
      })
      this.comentariosService.getFarmacos()
      .subscribe(comentarios => {
        this.comentarios = comentarios;
        console.log(this.comentarios);
      })
  }

  onSelectComentario(comentario: Comentario): void {
    this.selectedComentario = comentario;
  }

  onSelectReacao(reacao: Reacao): void {
    this.selectedReacao = reacao;
  }

}
