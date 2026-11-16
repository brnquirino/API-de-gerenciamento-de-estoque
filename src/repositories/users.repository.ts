import { poolPromise } from "../database/connection";
import { createUser } from "../types/user";
import oracledb from "oracledb";



type CreateUserResult = {
    id: number[];
}

export async function findUserByEmailRepository(email: string){
    const pool = await poolPromise;
    const connection = await pool.getConnection();

    try{
        const result = await connection.execute(`SELECT * FROM USERS WHERE EMAIL = :email`, { email });

        return result.rows ?? [];
        
    } finally {
        await connection.close();
    }
};



export async function createUserRepository(user: createUser){
    const pool = await poolPromise;
    const connection = await pool.getConnection();

    try{
        const result = await connection.execute<CreateUserResult>(`
            INSERT INTO USERS
            (NAME, EMAIL, PASSWORD_HASH, ROLE_ID)
            VALUES
            (:name, :email, :password, :roleId)
            RETURNING ID INTO :id`,
            { name: user.name, email: user.email, password: user.password, roleId: 3, id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER} });
            
        const id = result.outBinds?.id[0];
            
        if(id === undefined){
            throw new Error ("Não foi possivel obter o ID do usuário criado.");
        };

            await connection.commit();

            return id;

    } finally {
        await connection.close();
    }
};