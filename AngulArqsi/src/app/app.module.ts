import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { LoginComponent } from './login/login.component';

import { ReceitaSearchComponent } from './receita-search/receita-search.component';
import { ReceitasService } from './services/receitas.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { MedicoGuard } from './guards/medico.guard';
import { UtenteGuard } from './guards/utente.guard';
import { RegistarComponent } from './registar/registar.component';

import { UserService } from './services/user.service';
import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';
import { PrescricaoDetailComponent } from './prescricao-detail/prescricao-detail.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ApresentacoesComponent } from './apresentacoes/apresentacoes.component';
import { ApresentacoesService } from './services/apresentacoes.service';
import { CriarReceitaComponent } from './criar-receita/criar-receita.component';
import { FarmaceuticoComponent } from './farmaceutico/farmaceutico.component';
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentariosService } from './services/comentarios.service';
import { ComentarComponent } from './comentar/comentar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ReceitasComponent,
    LoginComponent,
    RegistarComponent,
    ReceitaDetailComponent,
    InitialPageComponent,
    ApresentacoesComponent,
    CriarReceitaComponent,
    FarmaceuticoComponent,
  	EditarReceitaComponent,
    ReceitaSearchComponent,
    ComentariosComponent,
    ComentarComponent,
    PrescricaoDetailComponent  ],
  providers: [
    AuthGuard,
    MedicoGuard,
    UtenteGuard,
    AuthenticationService,
    ReceitasService,
    UserService,
    ApresentacoesService,
    ComentariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
