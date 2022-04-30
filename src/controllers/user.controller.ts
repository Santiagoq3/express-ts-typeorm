import {Request,Response} from "express"
import { User } from '../entities/User';
import { userRepository } from '../repository/user.repository';

export const createUser = async(req:Request,res:Response)=>{

   try {

    const {firstName,lastName} =  req.body;

    const resp = await userRepository.create(firstName,lastName)

    res.status(200).json({
        ok:true,
        msg: "create users"
    })
   } catch (error) {
     res.status(500).json(error)
   }
}


export const getUsers = async(req:Request,res:Response)=>{

    const users = await userRepository.getUsers()
    return res.status(200).json(users)

}

export const updateUser = async(req:Request,res:Response)=>{

    const body= req.body
    const {id} = req.params;

    const resp = await userRepository.updateUser(Number(id),body)

    console.log(resp)
    return res.json({
        ok:true,
        msg: "Usuario actualizado correctamente"
    })

}

export const deleteUser = async(req:Request,res:Response)=>{

    const {id} = req.params;

    const result = await userRepository.deleteUser(Number(id))
    
    if(result.affected === 0){
        return res.status(404).json({
            msg:"Usuario no encontrado"
        })
    }

    return res.status(200).json({
        ok:true,
        msg: "usuario eliminado correctamente"
    })

}