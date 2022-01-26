import { json, Request, Response } from "express";

import bd from "../database";

class IndexController {
    public async index(req: Request, res: Response) {
        const data = await bd.query('SELECT * FROM multiplicacion');
        res.json({ message: 'Datos Encontrados con exito', codigo: 0, data: data })
    }

}

export const indexController = new IndexController();