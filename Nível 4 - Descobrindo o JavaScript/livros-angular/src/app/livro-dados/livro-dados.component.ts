import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  editoras: Array<Editora> = [];
  livro: Livro = new Livro();
  autoresForm: string = '';
  
  constructor(private servEditora: ControleEditoraService, 
              private servLivros: ControleLivrosService,
              private router: Router) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split(/\r?\n/);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
