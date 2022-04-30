import {DataSource} from "typeorm"

import { User } from "./entities/User"

export const AppDataSource = new DataSource({
 type:"postgres",
 host:"localhost",
 username:"",
 password:"",
 port:5432,
 database:"",
 entities:[User],
 logging:true,
 synchronize: true
})
