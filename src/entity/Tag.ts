// import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
// import { Compliment } from "./Compliment"

// @Entity('Tags')
// export class Tag {

//     @PrimaryGeneratedColumn()
//     id: number
    
//     @Column({ type: 'text'})
//     name: string

//     @CreateDateColumn()
//     created_at: Date

//     @CreateDateColumn()
//     update_at: Date

//     @OneToMany(() => Compliment, (compliment) => compliment.id)
//     compliment: Compliment[]
// }