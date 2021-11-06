import { Column, CreateDateColumn, DatabaseType, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Turma{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nome: string;
 
    @Column()
    ra: string;

    @Column()
    data_de_nascimento: string;

    @Column()
    endereço: string;
 
    @Column({
        default: false
    })
    matriculado: boolean;

    @Column()
    idade: string;
 
}
