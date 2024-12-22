import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LivroIndicacaoService {
  private baseUrl = 'http://localhost:3000/api';

  // Método para buscar livros
  async buscarLivros() {
    const response = await axios.get(`${this.baseUrl}/livros`);
    return response.data;
  }

  // Método para buscar livros com filtros (por gênero ou autor)
  async buscarLivrosComFiltros(genero?: string, autor?: string) {
    const response = await axios.get(`${this.baseUrl}/livros/filtros`, {
      params: { genero, autor }
    });
    return response.data;
  }

  // Método para adicionar comentário sobre um livro
  async adicionarComentario(livroId: number, usuarioId: number, comentario: string) {
    const response = await axios.post(`${this.baseUrl}/comentarios`, {
      livro_id: livroId,
      usuario_id: usuarioId,
      comentario
    });
    return response.data;
  }

  // Método de login do usuário
  async login(email: string, senha: string) {
    const response = await axios.post(`${this.baseUrl}/login`, { email, senha });
    return response.data;
  }
}
