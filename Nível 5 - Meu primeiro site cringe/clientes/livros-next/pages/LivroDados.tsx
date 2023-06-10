import { useState } from "react";
import { ControleEditora } from "../classes/controle/ControleEditora"
import { Livro } from "../classes/modelo/Livro";
import { useRouter } from "next/router";

import { ControleLivros } from "../classes/controle/ControleLivros";



const controleLivros = ControleLivros;
const controleEditora = ControleEditora;


export default function LivroDados() {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }))
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const router = useRouter()
    

    function tratarCombo(evento: React.ChangeEvent<HTMLSelectElement>) {
        setCodEditora(Number(evento.target.value))
    }

    async function incluir(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault();
        const livro: Livro = {
            autores: autores.split("\n"),
            codEditora: codEditora,
            resumo: resumo,
            titulo: titulo,
            codico: "0"
        }
        controleLivros.incluirLivro(livro)

        
        router.push('/LivroLista')
        
       
    }   

    return (
        <main className="container-fluid">
            <h1>Dados do Livro</h1>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="titulo">Título</label>
                    <input className="form-control" type="text" id="titulo" onChange={(evento) => {
                        setTitulo(evento.target.value)
                    }} />
                </div>


                <div className='mb-3'>
                    <label htmlFor="resumo">
                        Resumo</label>
                    <textarea className="form-control" name="" id="resumo" cols={40} rows={5} onChange={(evento) => {
                        setResumo(evento.target.value)
                    }}></textarea>
                </div>


                <div className='mb-3'>
                    <label htmlFor="editora">
                        Editora</label>
                    <select className="form-select" name="editora" id="" onChange={(evento) => {
                        tratarCombo(evento)
                    }}>
                        {opcoes.map(editora => (
                            <option key={editora.value} value={editora.value}>{editora.text}</option>
                        ))}
                    </select>
                </div>

                <div className='mb-3'>
                    <label htmlFor="autores">
                        Autores (1 por linha)</label>
                    <textarea className="form-control" name="" id="autores" cols={40} rows={6} onChange={evento => setAutores(evento.target.value)}></textarea>
                </div>



                <button className="btn btn-primary" onClick={evento => incluir(evento)}>Salvar Dados</button>
            </form>
        </main>
    )
}