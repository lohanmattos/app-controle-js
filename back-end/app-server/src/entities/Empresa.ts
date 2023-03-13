import {Entity , Column, OneToMany, PrimaryColumn} from 'typeorm'

@Entity('tb_empresa')
export class Empresa{
    
    @PrimaryColumn()
    id: number

    @Column({name:'empresa_nome'})
    nome:string
    
    @Column({name:'empresa_sigla'})
    sigla:string

    //@OneToMany(() => Departamento, (departamentos) => departamentos.id)
    //departamentos: Departamento[]
}