import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculeMediaComponent } from './calcule-media/calcule-media.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ApoliceComponent } from './apolice/apolice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalculeMediaComponent,
    CadastroClienteComponent,
    ApoliceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
