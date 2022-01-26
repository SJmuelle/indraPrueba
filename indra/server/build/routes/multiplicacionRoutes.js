"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multiplicacionController_1 = require("../controllers/multiplicacionController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', multiplicacionController_1.multiplicacionController.list);
        this.router.get('/:id', multiplicacionController_1.multiplicacionController.getOne);
        this.router.post('/', multiplicacionController_1.multiplicacionController.create);
        this.router.put('/:id', multiplicacionController_1.multiplicacionController.update);
        this.router.delete('/:id', multiplicacionController_1.multiplicacionController.delete);
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
