"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data_res = yield database_1.default.query("SELECT  * from usuario");
            res.json(data_res);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data_res = yield database_1.default.query("select * FROM usuario u WHERE u.id = ?", [id]);
            console.log(data_res.length);
            if (data_res.length > 0) {
                return res.json({ text: 'Usuario Encontrada', codigo: 0, data: data_res[0] });
            }
            else {
                res.status(404).json({ text: 'Usuario no encontrada', codigo: 1 });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ text: 'Usuario Guardada Con Exito', codigo: 0 });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE documento = ?', [id]);
            res.json({ text: 'Usuario Eliminada Con Exito', codigo: 0 });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario SET ? WHERE documento= ?', [req.body, id]);
            res.json({ text: 'Usuario Actualizada Con Exito', codigo: 0 });
        });
    }
}
exports.usuarioController = new UsuarioController();
