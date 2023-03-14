import {Entity , Column, ManyToOne, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Empresa } from './Empresa'
import { Secao } from './Secao'

@Entity('tb_departamento')
export class Departamento{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome:string
    
    @Column()
    sigla:string

    @ManyToOne(() => Empresa, (empresa) => empresa.departamentos)
    empresa: Empresa

    @OneToMany(() => Secao, (secao) => secao.departamento )
    secoes: Secao[]
}