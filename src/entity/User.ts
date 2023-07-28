import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Compliment } from "./Compliment";

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'text' })
    email: string

    @Column({ type: 'text'})
    password: string

    @Column({ type: 'text'})
    admin: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    @OneToMany(() => Compliment, (compliment) => compliment.id)
    compliment: Compliment
}