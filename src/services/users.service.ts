import { User, createUser, updateUser } from "../types/user"; 
import {findUserByEmailRepository, createUserRepository} from "../repositories/users.repository";



export async function createUserService(name:string, email:string, password:string): Promise <User> {
    
    const userExists = await findUserByEmailRepository(email);

    if(userExists){
        throw new Error ("Usuário já cadastrado");
    }

    const user = await createUserRepository({
        name,
        email,
        password
    });

    return user;
};