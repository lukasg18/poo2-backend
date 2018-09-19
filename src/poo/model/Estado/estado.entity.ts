import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Municipio } from '../Municipio/municipio.entity';

@Entity()
export class Estado {
  @PrimaryGeneratedColumn()
  idEstado: number;

  @Column({ length: 30 })
  nome: string;

  @OneToMany(type => Municipio, municipio => municipio.estado)
  municipio: Municipio[];
}