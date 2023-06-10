import { Livro } from "../modelo/Livro";
import axios from "axios";


const http = axios.create({
  baseURL: "http://localhost:3030/livros",
  headers: {"Content-Type": "application/json"}
});

interface LivroMongo {
  _id: string | null,
  codEditora: number,
  titulo: string,
  resumo: string,
  autores: string[]
}



const obterLivros = async () => {
  const resposta = await http.get<LivroMongo[]>("/");
  return resposta.data

}

const incluirLivro = async (livro: Livro): Promise<void> => {
  const resposta = await http.post('/', {
    titulo: livro.titulo,
	  codEditora: livro.codEditora,
	  resumo: livro.resumo,
	  autores: livro.autores
  }) 
}

const excluirLivro = async (codico: string) => {
  await http.delete(`/${codico}`)
  
}

export const ControleLivros = {
  obterLivros,
  incluirLivro,
  excluirLivro
}