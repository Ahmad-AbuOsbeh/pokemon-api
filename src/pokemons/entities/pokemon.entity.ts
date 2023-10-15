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

    @Column({nullable: true})
    evolutionStage: string;

    @Column({nullable: true})
    evolved: number;

    @Column({nullable: true})
    familyID: number;

    @Column()
    type: string;

    @Column()
    weather: string;

    @Column({nullable: true})
    statTotal: number;
};
