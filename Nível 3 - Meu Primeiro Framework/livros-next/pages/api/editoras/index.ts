import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from "@/classes/controle/ControleEditora";

export const controleEditora = new ControleEditora();

export default async function(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Não permitido');
        return;
      }
  
      const editoras = await controleEditora.getEditoras();
      res.status(200).json(editoras);
    } 
    catch (error) {
      console.error(error);
      res.status(500).send('Erro interno no servidor!');
    }
}