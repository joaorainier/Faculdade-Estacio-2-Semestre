import { useEffect, useState } from "react"
import { Livro } from "../classes/modelo/Livro"
import LinhaLivro from "../componentes/LinhaLivro"
import Head from "next/head"
import { ControleEditora } from "../classes/controle/ControleEditora"
import Menu from "../componentes/Menu"
import { ControleLivros } from "../classes/controle/ControleLivros"



const controleEditoras = ControleEditora;
const controleLivros = ControleLivros





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
        return await livrosTratados
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
        <Head>
            <title>Tabela de Livros</title>
        </Head>
        <Menu />
        <main>
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
                        key={livro?.codico}
                    />
                    ))}
                </tbody>
            </table>

        </main>
      </>
    );
  }