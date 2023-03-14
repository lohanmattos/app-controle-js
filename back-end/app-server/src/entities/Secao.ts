import {Entity , Column, OneToMany, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Departamento } from './Departamento'

//@Entity()
export class Secao{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome:string

    @Column()
    descricao:string
    
    @Column()
    sigla:string

    //@ManyToOne(() => Departamento, (departamento) => departamento.secoes)
    //departamento: Departamento

}