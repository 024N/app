import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RewardedUserEntity {

    constructor(uid: String, rid: String){
        this.uid = uid;
        this.rid = rid;
    }

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    uid: String;

    @Column()
    rid: String;
}
