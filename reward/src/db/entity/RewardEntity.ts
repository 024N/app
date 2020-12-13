import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RewardEntity {

    constructor(name: string, amount: string, expiry_date: string){
        this.name = name;
        this.amount = amount;
        this.expiry_date = expiry_date;
    }

    @PrimaryGeneratedColumn()
    rid: number;

    @Column()
    name: string;

    @Column()
    amount: string;

    @Column()
    expiry_date: string;
}
