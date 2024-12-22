import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { AppRoutingModule } from './app-routing.module'; // Importando AppRoutingModule

import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent, // Declaração do componente
  ],
  imports: [
    BrowserModule,
    FormsModule, // Incluindo FormsModule
    AppRoutingModule, // Incluindo AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente inicial
})
export class AppModule {}
