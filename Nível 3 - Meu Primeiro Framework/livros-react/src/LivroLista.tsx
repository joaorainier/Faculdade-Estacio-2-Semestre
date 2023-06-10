import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import React from "react";
import { Livro } from "./modelo/Livro";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

type props = {
    livro: Livro;
    excluir: ControleLivro;
    carregado: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinhaLivro = ({livro, excluir, carregado}: props) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return(
        <tr>
            <td scope="row">{livro.titulo}<br/>
                <button type="button" 
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                            excluir.excluir(livro.codigo);
                            carregado(true);
                        }}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((nome) => {return <li>{nome}</li>;})}
                </ul>
            </td>
        </tr>
    );
}

export default function LivroLista(){
    const [livros, setLivros] = React.useState<Livro[]>(controleLivro.obterLivros());
    const [carregado, setCarregado] = React.useState<boolean>(false);

    React.useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);


    return (
        <main>
            <div>
                <h1>Catálogo de Livros</h1>
            </div>
            <table className="table">
                <thead className="thead-dark">
                        <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    livros.map((livro) => {
                        return (
                        <LinhaLivro key={livro.codigo}livro={livro}carregado={setCarregado}excluir={controleLivro}/>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
} 