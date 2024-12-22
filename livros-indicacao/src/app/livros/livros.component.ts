import { Component, OnInit } from '@angular/core';
import { LivroIndicacaoService } from '../services/livro-indicacao.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: any[] = [];
  comentario: string = '';
  usuarioId: number = 1; // Usuário simulado para o exemplo
  filtroGenero: string = '';
  filtroAutor: string = '';
  email: string = '';
  senha: string = '';

  constructor(private livroService: LivroIndicacaoService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  // Método para carregar livros sem filtros
  async carregarLivros() {
    this.livros = await this.livroService.buscarLivros();
  }

  // Método para buscar livros com filtros (por gênero ou autor)
  async carregarLivrosComFiltros() {
    this.livros = await this.livroService.buscarLivrosComFiltros(this.filtroGenero, this.filtroAutor);
  }

  // Método para adicionar comentário
  async adicionarComentario(livroId: number) {
    await this.livroService.adicionarComentario(livroId, this.usuarioId, this.comentario);
    alert('Comentário adicionado');
    this.comentario = ''; // Limpar campo de comentário após envio
  }

  // Método de login (pode ser chamado ao inicializar ou via um formulário)
  async login() {
    const resposta = await this.livroService.login(this.email, this.senha);
    if (resposta.message === 'Login bem-sucedido') {
      this.usuarioId = resposta.user.id; // Armazenando o ID do usuário após login
      alert('Login bem-sucedido');
    } else {
      alert('Credenciais inválidas');
    }
  }
}
