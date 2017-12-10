import { Component, OnInit } from '@angular/core';
import { Comentario } from '../models/comentario';
import { ComentariosService } from '../services/comentarios.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Reacao } from '../models/reacao';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent implements OnInit {

  comentarios: Comentario[] = [];

  reacoes: Reacao[] = [];

  comentarios2: Comentario[] = [];

  selectedComentario: Comentario;

  selectedReacao: Reacao;

  aux: number;

  farmacoIdAux: number;

  inicial: Reacao[] = new Array();

  model: any = {};
  loading = false;
  error = '';
  constructor(private comentariosService: ComentariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.comentariosService.getFarmacos().subscribe(comentarios => {
      this.comentarios = comentarios;
      console.log(this.comentarios);
      this.comentariosService.getReacoes()
        .subscribe(reacoes => {
          this.reacoes = reacoes;
          console.log(this.reacoes);

          this.comentarios.forEach(comentario => {
            //comentario.reacoes=[{id:0, descricao:'alérgico'}];
            comentario.reacoes = [undefined];
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
  }

  comentar() {
    this.loading = true;
    this.comentarios.forEach(comentario => {
      if (comentario.nome == this.model.nomeFarmaco) {
        this.farmacoIdAux = comentario.id;

        this.comentariosService.comentar(this.farmacoIdAux, this.model.descricao).subscribe(result => {
          this.loading = false;
          if (result === true) {
            this.router.navigate(['/comentarios']);
          } else {
            this.error = 'Impossível criar comentario';
          }
        });

      }
    });
  }

}
