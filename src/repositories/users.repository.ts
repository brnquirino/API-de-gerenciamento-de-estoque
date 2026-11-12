import { poolPromise } from "../database/connection";




export async function findUserByEmailRepository(email: string){
    const pool = await poolPromise;
    const connection = await pool.getConnection();
};



export async function createUserRepository(){};