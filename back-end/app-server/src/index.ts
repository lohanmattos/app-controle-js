import express from "express";
import 'reflect-metadata';
import empresaRoute from "./routes/empresa.route";
import statusRoute from "./routes/status.route";

//Configuração padrao
const app = express();
const host = 'http://localhost';
const port = 3001;

//Configurações da Aplicação
app.use(express.json());

//Configuração das rotas
app.use(statusRoute);
app.use(empresaRoute);

//Iniciar o servidor 
app.listen(port, () =>{
    console.log(`Servidor online: ${host}:${port}`)
})