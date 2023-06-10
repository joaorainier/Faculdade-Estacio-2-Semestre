import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from ".";

export default async function(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Não permitido');
        return;
      }
  
      const {codEditora} = req.query;
      res.status(200).json(controleEditora.getNomeEditora(Number(codEditora)));
    } 
    catch (error) {
      console.error(error);
      res.status(500).send('Erro interno no servidor!');
    }
}