import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

// yarn add uuid
// yarn add @types/uuid -D
//uuid v4 é gerado
@Entity('Users')
export class User {
    @PrimaryColumn()
    readonly id: string;
    // @PrimaryGeneratedColumn()
    // id: number

    @Column({ type: 'text'})
    name: string;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'text'})
    password: string;

    @Column({ type: 'boolean'})
    admin: Boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // @OneToMany(() => Compliment, (compliment) => compliment.id)
    // compliment: Compliment

    constructor(){
        //verifico se o id existe se não existir eu crio um id
        if(!this.id){
            this.id = uuid();
        }
    }

}