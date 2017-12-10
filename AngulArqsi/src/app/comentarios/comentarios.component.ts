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

  comentarios2: Comentario[] = [];

  selectedComentario: Comentario;

  selectedReacao: Reacao;

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    /*this.comentariosService.getReacoes()
      .subscribe(reacoes => {
        this.reacoes = reacoes;
        console.log(this.reacoes);
      })*/
    this.comentariosService.getFarmacos().subscribe(comentarios => {
      this.comentarios = comentarios;
      console.log(this.comentarios);
      this.comentariosService.getReacoes()
        .subscribe(reacoes => {
          this.reacoes = reacoes;
          console.log(this.reacoes);

          this.comentarios.forEach(comentario => {
            comentario.reacoes=[{id:0, descricao:'alérgico'}];
            //comentario.reacoes=[];
            this.reacoes.forEach(reacao => {
              if (reacao.farmacoId == comentario.id) {
                console.log(comentario.reacoes);
                comentario.reacoes.push({
                  "id": reacao.id,
                  "descricao": reacao.descricao
                });
                console.log(this.comentarios);
              }
            });
          });
        })
    })
    /*this.reacoes.forEach(reacao => {
      this.comentarios.forEach(comentario => {
        if (reacao.farmacoId == comentario.id) {
          //this.aux = comentario1.reacoes.length + 1;
          comentario.reacoes.push({
            "id": reacao.id,
            "descricao": reacao.descricao
          });
          this.comentarios2.push(comentario);
          console.log(this.comentarios2);
        }
      });
    });*/
  }

  onSelectComentario(comentario: Comentario): void {
    this.selectedComentario = comentario;
  }

  onSelectReacao(reacao: Reacao): void {
    this.selectedReacao = reacao;
  }

}
