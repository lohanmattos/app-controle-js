import 'reflect-metadata'
import express from "express";
import statusRoute from "./routes/status.route";
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {

    //Configuração padrao
    const app = express();
    const host = 'http://localhost';
    const port = 3000;

    //Configurações da Aplicação
    app.use(express.json());

    //Configuração das rotas
    app.use(statusRoute);

    //Iniciar o servidor 
    app.listen(port, () =>{
        console.log(`Servidor online: ${host}:${port}`)
    })

})


