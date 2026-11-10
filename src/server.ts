import { app } from "./app";
import { poolPromise } from "./database/connection";

async function startServer(){

    try{
        await poolPromise;
        const address = await app.listen({
            port:3000
        });
        console.log(`Deu certo no endereço${address}`);
    } catch (err){
        app.log.error(err);
        process.exit(1);
    }
}