import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    pokdexNumer: number;

    @Column()
    generation: number;

    @Column()
    evolutionStage: string;

    @Column()
    evolved: number;

    @Column()
    familyID: number;

    @Column()
    type: string;

    @Column()
    weather: string;

    @Column()
    statTotal: number;
};
