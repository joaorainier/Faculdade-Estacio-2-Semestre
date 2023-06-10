import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  constructor() { }
  private editoras: Array<Editora> = [
    {codEditora: 6341, nome: "Savaira"},
    {codEditora: 4141, nome: "Copus"},
    {codEditora: 1262, nome: "Livretos"}
  ];

  getNomeEditora(codEditora: number): string {
    let filtro = this.editoras.filter((editora) => {
      return editora.codEditora === codEditora
    })

    return filtro[0].nome
  };

  getEditoras(): Array<Editora> {
    return this.editoras
  }

}
