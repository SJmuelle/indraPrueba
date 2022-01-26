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
exports.multiplicacionController = void 0;
const database_1 = __importDefault(require("../database"));
class MultiplicacionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data_res = yield database_1.default.query("SELECT  * from multiplicacion");
            res.json(data_res);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data_res = yield database_1.default.query("select * FROM multiplicacion u WHERE u.id = ?", [id]);
            console.log(data_res.length);
            if (data_res.length > 0) {
                return res.json({ text: 'multiplicacion Encontrada', codigo: 0, data: data_res[0] });
            }
            else {
                res.status(404).json({ text: 'multiplicacion no encontrada', codigo: 1 });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body)
            let num1 = req.body.num1;
            let num2 = req.body.num2;
            let resp = req.body.num1 * req.body.num2;
            let now = new Date();
            let data = {
                "num1": num1,
                "num2": num2,
                "res": resp,
                "fecha": now
            };
            yield database_1.default.query('INSERT INTO multiplicacion set ?', [data]);
            res.json({ text: `El resultado de tu multiplicacion es ${resp}`, codigo: 0 });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id == "0") {
                yield database_1.default.query('DELETE FROM multiplicacion');
            }
            else {
                yield database_1.default.query('DELETE FROM multiplicacion WHERE id = ?', [id]);
            }
            res.json({ text: 'multiplicacion Eliminada Con Exito', codigo: 0 });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE multiplicacion SET ? WHERE id= ?', [req.body, id]);
            res.json({ text: 'multiplicacion Actualizada Con Exito', codigo: 0 });
        });
    }
}
exports.multiplicacionController = new MultiplicacionController();
