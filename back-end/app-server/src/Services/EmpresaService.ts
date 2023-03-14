import { AppDataSource } from "../data-source";
import { Empresa } from "../entities/Empresa";

export const empresaService = AppDataSource.getRepository(Empresa);