import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method, query } = req;

        switch (method) {
            case 'DELETE':
                res.status(200).json({message: 'Livro excluido com sucesso!'});
                
                controleLivro.excluirLivro(Number(query.codico))
                break;
            
            default:
                res.status(405).json({
                    message: "Metodo não permitido"
                });
                break;
        }

        
    } catch (err: any) {
        res.status(500).json({statusCode: 500, message: err.message})
    }

}