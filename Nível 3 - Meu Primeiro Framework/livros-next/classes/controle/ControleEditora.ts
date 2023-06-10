import { Editora } from "../modelo/Editora";

const editoras: Editora[] = [
    {
        codEditora: 1,
        nome: 'Intrínseca',
    },
    {
        codEditora: 2,
        nome: 'Aleph',
    },
    {
        codEditora: 3,
        nome: 'LeYa',
    }
];


export class ControleEditora {
    public getEditoras() {
        return editoras;
    }

    public getNomeEditora(codigo: number) {
        const editora = editoras.filter(editoras => editoras.codEditora === codigo );
        return editora[0].nome;
    }
}