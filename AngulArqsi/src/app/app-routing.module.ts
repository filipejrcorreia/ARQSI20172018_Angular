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

import { CriarReceitaComponent } from './criar-receita/criar-receita.component';

import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';

import { ComentariosComponent } from './comentarios/comentarios.component';

import { ComentarComponent } from './comentar/comentar.component';

import { PrescricaoDetailComponent } from './prescricao-detail/prescricao-detail.component';
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';


const routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full' },
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'initial', component: InitialPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'farmaceutico', component: FarmaceuticoComponent },
  {
    path: 'receitas', component: ReceitasComponent, canActivate:
      [AuthGuard, MedicoGuard]
  },
  { path: 'registar', component: RegistarComponent },
  { path: 'apresentacoes', component: ApresentacoesComponent },
  { path: 'receita/criar-receita', component: CriarReceitaComponent },
  { path: 'receita-detail/:id', component: ReceitaDetailComponent },
  { path: 'prescricao-detail/:id/:id2', component: PrescricaoDetailComponent },
  { path: 'comentarios', component: ComentariosComponent },
  { path: 'comentar', component: ComentarComponent },
  { path: 'receita/editar-receita', component: EditarReceitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
