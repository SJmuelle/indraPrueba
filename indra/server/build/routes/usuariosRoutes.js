"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.usuarioController.list);
        this.router.get('/:id', usuariosController_1.usuarioController.getOne);
        this.router.post('/', usuariosController_1.usuarioController.create);
        this.router.put('/:id', usuariosController_1.usuarioController.update);
        this.router.delete('/:id', usuariosController_1.usuarioController.delete);
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
