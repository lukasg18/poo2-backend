import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { Controle } from '../Controle/controle.entity';

@Entity()
export class TipoControle {
  @PrimaryGeneratedColumn()
  idtipoControle: number;

  @Column({ length: 30 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Controle, controle => controle.tipoControle)
  controle: Controle[];
}