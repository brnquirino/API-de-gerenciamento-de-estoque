import { FastifyInstance } from "fastify";
import { getUserById, createUser } from "../controllers/users.Controller";

export async function usersRoutes(app: FastifyInstance){
    app.post("/user", createUser);
    app.get("/user/:id", getUserById);
};