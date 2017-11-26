import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { MedicamentoDetailComponent } from './medicamento-detail/medicamento-detail.component';
import { MedicamentoService } from './medicamento.service';


@NgModule({
  declarations: [
    AppComponent,
    MedicamentosComponent,
    MedicamentoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MedicamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
