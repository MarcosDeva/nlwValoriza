import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./Tag"
import { User } from "./User"

@Entity('Compliments')
export class Compliment {
    
    @PrimaryGeneratedColumn()
    id: number
    
    // FK user_sender
    // FK user_reciver
    /* muito para um porque aqui esta a chave estrangeira */ 
    @ManyToOne(() => Tag, (tag_id) => tag_id.id)
    tag_id: Tag

    @ManyToOne(() => User, (user_id) => user_id.id)
    user_id: User

    @Column({ type: 'text'})
    message: string

    @CreateDateColumn()
    created_at: Date
    
    
}