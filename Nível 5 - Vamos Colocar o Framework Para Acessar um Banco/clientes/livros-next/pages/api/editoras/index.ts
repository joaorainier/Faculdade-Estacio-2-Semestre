import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "../../../classes/controle/ControleEditora";

export const controleEditora = ControleEditora

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method } = req;

        switch (method) {

            case 'GET':
                res.status(200).json([
                    controleEditora.getEditoras()
                ])
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