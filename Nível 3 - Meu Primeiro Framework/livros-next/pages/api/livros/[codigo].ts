import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from ".";

export default async function(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'DELETE') {
        res.status(405).send('Não permitido');
        return;
      }
      const {codigo} = req.query;
      controleLivro.excluir(Number(codigo));
      res.status(200).json(controleLivro.obterLivros());
    } 
    catch (error) {
      console.error(error);
      res.status(500).send('Erro interno no servidor!');
    }
}