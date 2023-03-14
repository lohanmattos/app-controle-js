import {Entity , Column, PrimaryColumn, ManyToOne} from 'typeorm'
import { Empresa } from './Empresa'

@Entity('tb_departamento')
export class Departamento{
    
    @PrimaryColumn()
    id: number

    @Column({name:'departamento_nome'})
    nome:string
    
    @Column({name:'departamento_sigla'})
    sigla:string

    @ManyToOne(() => Empresa, (empresa) => empresa.departamentos)
    empresa: Empresa
}