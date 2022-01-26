import{Request, Response} from "express";

import bd from "../database";

class MultiplicacionController{

    public async list (req :Request, res:Response){
        const data_res=await bd.query("SELECT  * from multiplicacion");
        res.json(data_res)
    }


    public async getOne (req :Request, res:Response):Promise<any>{
        const {id}=req.params;
        const data_res =await bd.query("select * FROM multiplicacion u WHERE u.id = ?", [id]);   
        console.log(data_res.length);    
        if(data_res.length > 0){
            return res.json({text:'multiplicacion Encontrada', codigo:0, data:data_res[0]});
        }else{
            res.status(404).json({text:'multiplicacion no encontrada',codigo:1});
        }
    }
    public async create(req:Request, res:Response):Promise<void>{
        // console.log(req.body)
        let num1=req.body.num1
        let num2=req.body.num2
        let resp=req.body.num1*req.body.num2;
        let now= new Date();
        let data={
            "num1":num1,
            "num2":num2,
            "res":resp,
            "fecha":now
        }
        await bd.query('INSERT INTO multiplicacion set ?', [data]);      
        res.json({text:`El resultado de tu multiplicacion es ${resp}` ,codigo:0});
    }
    public async delete(req:Request, res:Response):Promise<void>{
        const {id}=req.params;
        if(id=="0"){
            await bd.query('DELETE FROM multiplicacion');
        }else{
            await bd.query('DELETE FROM multiplicacion WHERE id = ?', [id]);
        }
       
        res.json({text:'multiplicacion Eliminada Con Exito',codigo:0})
    }
    public async update(req:Request, res:Response){
        const {id}=req.params;
        await bd.query('UPDATE multiplicacion SET ? WHERE id= ?', [req.body, id]);
        res.json({text:'multiplicacion Actualizada Con Exito',codigo:0})
    }

}
export const multiplicacionController=new MultiplicacionController();