import 'dotenv/config';
import oracledb from 'oracledb';

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const connectString = process.env.DB_CONNECT_STRING;

if (!user || !password || !connectString){
    throw new Error ('Variaveis de conexão com  banco em erro.');
};


export const pollPromise = oracledb.createPool({
    user,
    password,
    connectString,
    poolMin: 1,
    poolMax: 5,
    poolIncrement: 1
});
