import { ControleEditora } from "@/classes/controle/ControleEditora";
import React from "react";
import { Livro } from "@/classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livros: Livro;
    excluir: (cod: number) => Promise<void>;
};

export const LinhaLivro:React.FC<LinhaLivroProps> = (props) => { 
    const nomeEditora = controleEditora.getNomeEditora(props.livros.codEditora);
    return(
        <tr>
            <td scope="row">{props.livros.titulo}<br/>
                <button type="button" 
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                            props.excluir(props.livros.codigo);
                        }}>Excluir</button>
            </td>
            <td>{props.livros.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {props.livros.autores.map((nome) => {return <li>{nome}</li>;})}
                </ul>
            </td>
        </tr>
    );
}