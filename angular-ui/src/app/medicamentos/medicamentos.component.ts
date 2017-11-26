import { Component, OnInit } from '@angular/core';

import { Medicamento } from '../medicamento';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  selectedMedicamento: Medicamento;

  medicamentos: Medicamento[];

  constructor(private medicamentoService: MedicamentoService) { }

  ngOnInit() {
    this.getMedicamentos();
  }

  onSelect(medicamento: Medicamento): void {
    this.selectedMedicamento = medicamento;
  }

  getMedicamentos(): void {
    this.medicamentoService.getMedicamentos().subscribe(medicamentos => this.medicamentos = medicamentos);
  }

}
