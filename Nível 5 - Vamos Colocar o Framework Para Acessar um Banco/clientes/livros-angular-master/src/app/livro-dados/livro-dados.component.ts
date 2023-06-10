import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = {
    titulo: '',
    codico: '0',
    codEditora: 0,
    autores: [],
    resumo: ''
  }

  public autoresForm: string = "";
  public editoras: Array<Editora> = []

  constructor(
    private servEditora: ControleEditoraService, 
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split("\n")
    this.servLivros.incluirLivro({...this.livro, codEditora: +this.livro.codEditora}).subscribe(() => {
      this.router.navigate(["/lista"])
    });
  }
}
