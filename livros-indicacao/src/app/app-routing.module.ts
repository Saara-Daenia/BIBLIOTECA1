import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component'; // Importe o componente desejado

const routes: Routes = [
  { path: '', component: LivrosComponent }, // Rota padrão (raiz)
  { path: '**', redirectTo: '' }, // Redireciona rotas inválidas para a raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
