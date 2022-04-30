import {Entity,BaseEntity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeorm"

@Entity()
export class User extends BaseEntity{

 @PrimaryGeneratedColumn()
 id: number
 
 @Column()
 firstName:string;

 @Column()
 lastName:string;

 @Column({
     default: true
 })
 active: boolean;

 @CreateDateColumn()
 createdAt: Date;

 @UpdateDateColumn()
 updatedAd: Date;



}