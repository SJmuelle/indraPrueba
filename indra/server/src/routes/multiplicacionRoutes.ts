import { Router } from "express";

import {multiplicacionController } from "../controllers/multiplicacionController";

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',multiplicacionController.list);
        this.router.get('/:id',multiplicacionController.getOne);
        this.router.post('/',multiplicacionController.create);
        this.router.put('/:id',multiplicacionController.update);
        this.router.delete('/:id',multiplicacionController.delete);
    }
}
const indexroutes = new IndexRoutes();
export default indexroutes.router;
