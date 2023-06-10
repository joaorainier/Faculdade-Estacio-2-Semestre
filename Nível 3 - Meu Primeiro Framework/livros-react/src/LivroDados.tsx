import React from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora} from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export default function LivroDados(){
    const navigate = useNavigate();
    const opcoes = controleEditora.getEditoras;

    const [titulo, setTitulo] = React.useState<string>("");
    const [resumo, setResumo] = React.useState<string>("");
    const [autores, setAutores] = React.useState<string>("");
    const [codEditora, setcodEditora] = React.useState<number>(0); 

    function tratarCombo(event: React.ChangeEvent<HTMLSelectElement>) {
        setcodEditora(parseInt(event.target.value));
    }

    function incluir(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const livro = {
          codigo: 0,
          codEditora,
          titulo,
          resumo,
          autores: autores.split("\n")
        };
        controleLivro.incluir(livro);
        navigate("/");
    }

    return (
        <main>
            <div>
                <h1>Dados do Livro</h1>
            </div>
            <form onSubmit={(event) => incluir(event)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Titulo</label>
                    <input className="form-control mb-2" id="titulo" type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Resumo</label>
                    <textarea className="form-control mb-2" id="resumo" value={resumo} onChange={(event) => setResumo(event.target.value)} rows={3}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Editora</label>
                    <select className="form-control mb-4" id="editora" value={codEditora} onChange={(event) => {tratarCombo(event);}}>
                        {
                        controleEditora.getEditoras().map((editora) => {
                            return (
                            <option value={Number(editora.codEditora)}>{editora.nome}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Autores (1 por linha)</label>
                    <textarea className="form-control mb-2" id="autores" value={autores} onChange={(event) => setAutores(event.target.value)} rows={3}></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mb-2">Salvar Dados</button>
                </div>
            </form>
        </main>
    );
}