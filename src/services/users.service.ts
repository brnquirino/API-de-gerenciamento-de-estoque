import { User, createUser, updateUser } from "../types/user"; 
import {findUserByEmailRepository, createUserRepository} from "../repositories/users.repository";



export async function createUserService(name:string, email:string, password:string): Promise <number> {
    
    const userExists = await findUserByEmailRepository(email);

    if(userExists.length > 0){
        throw new Error ("Usuário já cadastrado");
    };

    const user = await createUserRepository({
        name,
        email,
        password
    });

    return user;
};