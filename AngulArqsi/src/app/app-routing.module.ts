import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { AuthGuard } from './guards/auth.guard';
import { MedicoGuard } from './guards/medico.guard';
import { UtenteGuard } from './guards/utente.guard';
import { FarmaceuticoGuard } from './guards/farmaceutico.guard';

import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';

import { RegistarComponent } from './registar/registar.component';

import { InitialPageComponent } from './initial-page/initial-page.component';

import { ApresentacoesComponent } from './apresentacoes/apresentacoes.component';

import { ApresentacaoMedicamentosComponent } from './apresentacao-medicamentos/apresentacao-medicamentos.component';

const routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full' },
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'initial', component: InitialPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'farmaceutico', component: FarmaceuticoComponent},
  {
    path: 'receitas', component: ReceitasComponent, canActivate:
      [AuthGuard, MedicoGuard]
  },
  { path: 'receitas/:id_receita', component: ReceitasComponent, canActivate: [FarmaceuticoGuard]},
  { path: 'registar', component: RegistarComponent },
  { path: 'apresentacoes', component: ApresentacoesComponent },
  { path: 'apresentacao-medicamentos', component: ApresentacaoMedicamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
