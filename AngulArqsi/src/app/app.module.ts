import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { LoginComponent } from './login/login.component';

import { ReceitasService } from './services/receitas.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { MedicoGuard } from './guards/medico.guard';
import { UtenteGuard } from './guards/utente.guard';
import { AlertComponent } from './alert/alert.component';
import { RegistarComponent } from './registar/registar.component';

import { UserService } from './services/user.service';
import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ApresentacoesComponent } from './apresentacoes/apresentacoes.component';
import { ApresentacoesService } from './services/apresentacoes.service';
import { ApresentacaoMedicamentosComponent } from './apresentacao-medicamentos/apresentacao-medicamentos.component';
import { CriarReceitaComponent } from './criar-receita/criar-receita.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    ReceitasComponent,
    LoginComponent,
    AlertComponent,
    RegistarComponent,
    ReceitaDetailComponent,
    InitialPageComponent,
    ApresentacoesComponent,
    ApresentacaoMedicamentosComponent,
    CriarReceitaComponent
  ],
  providers: [
    AuthGuard,
    MedicoGuard,
    UtenteGuard,
    AuthenticationService,
    ReceitasService,
    HeroService,
    MessageService,
    UserService,
    ApresentacoesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
