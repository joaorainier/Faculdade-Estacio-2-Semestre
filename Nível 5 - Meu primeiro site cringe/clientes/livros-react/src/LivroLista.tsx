import { useEffect, useState } from "react";
import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivros } from "./controle/ControleLivros";
import { Livro } from "./modelo/Livro";

interface PropsLinha {
  livro: Livro;
  excluir: (codico: string) => void;
  nomeEditora: string;
}

const controleLivros = ControleLivros;
const controleEditoras = ControleEditora;

export default function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>();
  const [carregado, setCarregado] = useState<boolean>(false);

  const fetchData =async () => {
    const data = await controleLivros.obterLivros();
    console.log(data)
    const livrosTratados = data.map((livro): Livro => ({
      autores: livro.autores,
      codEditora: livro.codEditora,
      codico: String(livro._id),
      resumo: livro.resumo,
      titulo: livro.titulo
    }))
    return livrosTratados
  }

  useEffect(() => {
    const data = fetchData()
    data.then((res) => {
      setLivros(res)
    })
    setCarregado(true);
  }, [carregado]);

  const excluir = (codicoLivro: string) => {
    controleLivros.excluirLivro(codicoLivro);
    
    setCarregado(false);
  };

  return (
    <>
      <h1 className="h1">Catálogo de Livros</h1>
      <table className="table table-light">
        <thead className="table-dark">
          <tr>
            <th className="col-2">Titulo</th>
            <th className="col-6">Resumo</th>
            <th className="col-2">Editora</th>
            <th className="col-2">Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros?.map((livro) => (
            <LinhaLivro
              livro={livro}
              nomeEditora={controleEditoras.getNomeEditora(livro.codEditora)}
              excluir={excluir}
              key={livro.codico}
            />
            
          ))}
        </tbody>
      </table>
    </>
  );
}

function LinhaLivro({ livro, excluir, nomeEditora }: PropsLinha) {
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
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
