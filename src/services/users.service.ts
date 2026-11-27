import { createUserResponse } from "../types/user";
import {findUserByEmailRepository, createUserRepository} from "../repositories/users.repository";
import bcrypt from "bcrypt";

export async function createUserService(name:string, email:string, password:string): Promise <createUserResponse> {
    
    const userExists = await findUserByEmailRepository(email);
    
    if(userExists.length > 0){
        throw new Error ("Usuário já cadastrado");
    };

    const passwordHash = await bcrypt.hash(password, 12);
    
    const user = await createUserRepository({
        name,
        email,
        password: passwordHash
    });

    return {
        id: user,
        name,
        email
    };
};