import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivroMongo } from './livro-mongo';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private readonly baseUrl = "http://localhost:3030/livros"
  constructor(private http: HttpClient) {
  }
  params = new HttpParams()
    .set("Content-Type", "application/json")
  
  obterLivros(params = this.params): Observable<LivroMongo[]> {
    
    return this.http.get<LivroMongo[]>(this.baseUrl, { params })
  }

  mapearLivros(listaLivros: LivroMongo[]): Livro[] {
    return listaLivros.map((livro) => ({
      autores: livro.autores,
      resumo: livro.resumo,
      codEditora: livro.codEditora,
      codico: String(livro._id),
      titulo: livro.titulo
    }))
  }

  incluirLivro(livro: Livro, params = this.params): Observable<LivroMongo>{
    const novoLivro: LivroMongo = {
      autores: livro.autores,
      codEditora: livro.codEditora,
      resumo: livro.resumo,
      titulo: livro.titulo
    }

    return this.http.post<LivroMongo>(this.baseUrl, novoLivro, { params })
  }

  excluirLivro(codico: string, params = this.params ): Observable<LivroMongo> {
    return this.http.delete<LivroMongo>(`${this.baseUrl}/${codico}`, { params })
  }


}
