import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    pokdexNumber: number;

    @Column({nullable: true})
    generation: number;

    @Column({nullable: true})
    evolutionStage: string;

    @Column({nullable: true})
    evolved: number;

    @Column({nullable: true})
    familyID: number;

    @Column({nullable: true})
    type: string;

    @Column({nullable: true})
    weather: string;

    @Column({nullable: true})
    statTotal: number;
};
