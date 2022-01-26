import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";



import indexRoutes from "./routes/indexRoutes";
import multiplicacionRoutes from "./routes/multiplicacionRoutes";

class serve {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    } 

    config(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/multiplicacion', multiplicacionRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Aplicacion Corriendo en el puerto", this.app.get('port'));


        });
    }
}

const server = new serve();
server.start();