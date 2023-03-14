import { AppDataSource } from "../data-source";
import { Departamento } from "../entities/Departamento"; 

export const departamentoService = AppDataSource.getRepository(Departamento);