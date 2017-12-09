import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { AuthGuard } from './guards/auth.guard';
import { MedicoGuard } from './guards/medico.guard';
import { UtenteGuard } from './guards/utente.guard';

import { RegistarComponent } from './registar/registar.component';

import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full' },
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'initial', component: InitialPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'receitas', component: ReceitasComponent, canActivate:
      [AuthGuard, MedicoGuard]
  },
  { path: 'registar', component: RegistarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
