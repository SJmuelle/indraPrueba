import { Router } from "express";

import { indexController } from "../controllers/indexController";

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        // this.router.get('/',(req, res)=>res.send("LISTA "))
        this.router.get('/', indexController.index)
    }
}
const indexroutes = new IndexRoutes();
export default indexroutes.router;
