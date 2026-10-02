import { FastifyRequest, FastifyReply } from "fastify";

export function createUser(request: FastifyRequest, reply: FastifyReply){
    
    const data = request.body;

    return reply.status(201).send({
        mensagem: "Usuário cadastrado",
        dadosRecebidos: data
    });
}

export function getUserById(request: FastifyRequest, reply: FastifyReply){
    
    const {id} = request.params as {id:string}

    return reply.status(200).send({mensagem: `A procurar o utilizador com o ID: ${id}`});
};