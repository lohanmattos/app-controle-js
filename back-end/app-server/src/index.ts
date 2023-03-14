import express from "express";
import 'reflect-metadata';
import { AppDataSource } from "./data-source";
import departamentoRoute from "./routes/departamento.route";
import empresaRoute from "./routes/empresa.route";
import statusRoute from "./routes/status.route";

//Configuração padrao
const app = express();
const host = 'http://localhost';
const port = 3001;

//inicializar o dataSource
AppDataSource.initialize().then(() => {
    
//Configurações da Aplicação
app.use(express.json());

//Configuração das rotas
app.use(statusRoute);
app.use(empresaRoute);
app.use(departamentoRoute)

//Iniciar o servidor 
app.listen(port, () =>{
    console.log(`Servidor online: ${host}:${port}`)
})
})
