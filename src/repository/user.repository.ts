import { create } from 'domain';
import { User } from '../entities/User';
export class userRepository{
    
    static create = async(firstName:string,lastName: string)=>{

        const user = new User()

        user.firstName = firstName,
        user.lastName  = lastName

        return await user.save()

    }


    static getUsers = async()=>{
        const users = User.find()
        return users
    }

    static updateUser = async(id:number,attrs: Partial<User>)=>{

        const user = await User.findOneBy({id:id})

        if(!user){
            throw new Error("usuario no encontrado")
        }

        Object.assign(user,attrs)

        return user.save()
    }

    static deleteUser = async(id:number)=>{

       return await User.delete({id:id})
    }


    // async  update(id: number,attrs: Partial<UserEntity>){
    //     const user = await this.findOne(id);
    //     if(!user){
    //         throw new NotFoundException("user not found!")
    //     }
    //     Object.assign(user,attrs);

    //     return this.repo.save(user)
    // }
}