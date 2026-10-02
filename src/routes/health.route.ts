import { FastifyInstance } from "fastify";

export function healthRoutes(app: FastifyInstance){
    app.get("/health", async ()=>{
        return {
            mensagem: "Funcionando"
        };
    });
};