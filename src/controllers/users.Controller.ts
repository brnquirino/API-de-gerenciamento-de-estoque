import { FastifyRequest, FastifyReply } from "fastify";
import { createUserService } from "../services/users.service"



export async function createUser(request: FastifyRequest, reply: FastifyReply){
    
    const {name, email, password} = request.body as {name: string, email: string, password: string};

    const user = await createUserService(name, email, password);

    return reply.status(201).send({
        mensagem: "Usuário cadastrado",
        dadosRecebidos: user
    });
};



export function getUserById(request: FastifyRequest, reply: FastifyReply){
    
    const {id} = request.params as {id:string}

    return reply.status(200).send({mensagem: `A procurar o utilizador com o ID: ${id}`});
};



export function alterInfoUser(request: FastifyRequest, reply: FastifyReply){

    const {name, email, senha} = request.body as {name: string, email: string, senha: string};

    return reply.status(200).send(`Informações de usuário alteradas para: ${name}, ${email}, ${senha}`);
};

export function deleteUser(request: FastifyRequest, reply: FastifyReply){
    return reply.status(200).send({mensagem: "Exclusão feita com sucesso"});
};