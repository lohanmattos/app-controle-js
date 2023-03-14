import {Entity , Column, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Departamento } from './Departamento'

@Entity()
export class Empresa{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome:string

    @Column()
    descricao:string
    
    @Column()
    sigla:string

    @OneToMany(() => Departamento, (departamento) => departamento.empresa)
    departamentos: Departamento[]

}