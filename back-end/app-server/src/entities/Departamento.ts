import {Entity , Column, ManyToOne, PrimaryColumn} from 'typeorm'

@Entity('tb_departamento')
export class Departamento{
    
    @PrimaryColumn()
    id: number

    @Column({name:'departamento_nome'})
    nome:string
    
    @Column({name:'departamento_sigla'})
    sigla:string

    //@ManyToOne(() => Empresa, (empresa) => empresa.id)
    //empresa: Empresa

}