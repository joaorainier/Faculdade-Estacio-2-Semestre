import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivros } from "../../../classes/controle/ControleLivros";



export const controleLivro = ControleLivros;

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method, body } = req;

        switch (method) {
            case 'GET':
                res.status(200).json(
                    controleLivro.obterLivros()
                )
                break

            case 'POST':
                res.status(200).json({mensage: "Sucesso ao adicionar o livro"})
                controleLivro.incluirLivro(body)
                break
            
            default:
                res.status(405).json({
                    message: "Metodo não permitido"
                })
                break
        }

        
    } catch (err: any) {
        res.status(500).json({statusCode: 500, message: err.message})
    }

}