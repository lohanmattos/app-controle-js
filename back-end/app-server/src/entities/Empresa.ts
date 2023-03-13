import {Entity , Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Departamento } from './Departamento'

@Entity('tb_empresa')
export class Empresa{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({name:'empresa_nome'})
    nome:string
    
    @Column({name:'empresa_sigla'})
    sigla:string

    @OneToMany(() => Departamento, (departamentos) => departamentos.id)
    departamentos: Departamento[]
}