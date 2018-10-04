import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, PrimaryColumn, BaseEntity, EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Solicitacao } from './solicitacao.entity';
import { Depedente } from './depedente.entity';

@Entity('Titular')
export class Titular extends BaseEntity{
  @PrimaryColumn()
  idpessoa:number;

  @Column({ nullable:false })
  numerosus: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Depedente, depedente => depedente.titular, { eager:true })
  depedente: Depedente[];

  @OneToMany(type => Solicitacao, solicitacao => solicitacao.titular, { eager:true })
  solicitacao: Solicitacao[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.titular)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;
}