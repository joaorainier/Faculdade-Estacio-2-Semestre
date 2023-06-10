import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '@/classes/controle/ControleLivros';
import { Livro } from "@/classes/modelo/Livro";

export const controleLivro = new ControleLivro();

export default async function(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const livros = await controleLivro.obterLivros();
            res.status(200).json(livros);
        }
        else if(req.method === 'POST'){
            const { livro } = JSON.parse(req.body);
            const novoLivro = new Livro(livro.codigo,
                                        livro.editora,
                                        livro.titulo,
                                        livro.resumo,
                                        livro.autores);
            controleLivro.incluir(novoLivro);
            res.status(200).json(controleLivro.obterLivros());

        }
        else if((req.method !== 'GET')&&(req.method !== 'POST')){
            res.status(405).send('Não permitido');
            return;
        }
      } 
    catch (error) {
        console.error(error);
        res.status(500).send('Erro interno no servidor!');
    }
}