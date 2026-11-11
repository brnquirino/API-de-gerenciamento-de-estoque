import { poolPromise } from "../database/connection";

export async function findUserByEmailRepository(email: string){
    const pool = await poolPromise;
    const connection = await pool.getConnection();

    try{
        const result = await connection.execute(`SELECT * FROM USERS WHERE EMAIL = :email`, { email });

        return result.rows
        
    } finally {
        await connection.close();
    }
};



export async function createUserRepository(){};