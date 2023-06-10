import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit{
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  constructor(
    private servEditora: ControleEditoraService, 
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.carregaLivros()
  }

  carregaLivros() {
    this.servLivros.obterLivros().subscribe((listaLivros) => {
      this.livros = this.servLivros.mapearLivros(listaLivros)
    });
  }

  excluir = (codico: string) => {
    this.servLivros.excluirLivro(codico).subscribe(()=>{
      this.carregaLivros()
    })
    // this.servLivros.excluirLivro(codico);
    // this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora)
  }

}
