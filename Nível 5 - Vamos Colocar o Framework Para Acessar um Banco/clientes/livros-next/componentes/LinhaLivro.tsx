import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livro";

interface Props {
    livro: Livro;
    excluir: (codico: string) => void;
    nomeEditora: string;
  }



export default function LinhaLivro({ livro, excluir, nomeEditora }: Props) {
    return (
      <tr>
        <td>
          {livro.titulo} <br />
          <button
            className="btn btn-danger"
            onClick={() => {
              excluir(livro.codico);
            }}
          >
            Excluir
          </button>
        </td>
  
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores?.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  }