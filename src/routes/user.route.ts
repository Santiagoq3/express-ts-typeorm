
import {Router} from "express"
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller';

const userRoute:Router = Router()


 userRoute.post("/user",createUser)

 userRoute.get("/user",getUsers)

 userRoute.put("/user/:id",updateUser)

 userRoute.delete("/user/:id",deleteUser)


export default userRoute