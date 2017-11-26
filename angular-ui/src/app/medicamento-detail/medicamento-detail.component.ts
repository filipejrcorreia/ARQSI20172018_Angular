import { Component, OnInit, Input } from '@angular/core';
import { Medicamento } from '../medicamento';

@Component({
  selector: 'app-medicamento-detail',
  templateUrl: './medicamento-detail.component.html',
  styleUrls: ['./medicamento-detail.component.css']
})
export class MedicamentoDetailComponent implements OnInit {

  @Input() medicamento: Medicamento;

  constructor() { }

  ngOnInit() {
  }

}
