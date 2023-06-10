import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default function handler (req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const { method, query } = req;
        
        switch (method) {
            case 'GET':
                res.status(200).json(
                    {editora: controleEditora.getNomeEditora(Number(query.codEditora))}
                )
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