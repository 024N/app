import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserEntity {

    constructor(name: string, email: string, phone: string, country: string){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.country = country;
    }

    @PrimaryGeneratedColumn()
    uid: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    country: string;
}
