import { app } from "./app";

app.listen({port: 3000}, (err, adress)=>{
    if(err){
        console.error(err);
        process.exit(1);
    };

    console.log(`Deu certo no endereço: ${adress}`)
});