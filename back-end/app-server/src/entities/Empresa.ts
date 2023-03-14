import {Entity , Column, PrimaryColumn, OneToMany} from 'typeorm'
import { Departamento } from './Departamento'

@Entity('tb_empresa')
export class Empresa{
    
    @PrimaryColumn()
    id: number

    @Column({name:'empresa_nome'})
    nome:string
    
    @Column({name:'empresa_sigla'})
    sigla:string

    @OneToMany(() => Departamento, (departamento) => departamento.empresa)
    departamentos: Departamento[]

}