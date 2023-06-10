import { Editora } from "../modelo/Editora";

let editoras: Editora[] = [
    {codEditora: 6341, nome: "Savaira"},
    {codEditora: 4141, nome: "Copus"},
    {codEditora: 1262, nome: "Livretos"} 
]

const getNomeEditora = (codEditora: number): string => {
    return editoras.filter(editora => editora.codEditora === codEditora)[0]?.nome
}

const getEditoras = (): Editora[] => {
    return editoras
}

export const ControleEditora = {
    getEditoras,
    getNomeEditora
}