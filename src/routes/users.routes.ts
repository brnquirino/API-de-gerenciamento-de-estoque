import { FastifyInstance } from "fastify";
import { getUserById, createUser, deleteUser, alterInfoUser } from "../controllers/users.Controller";

export async function usersRoutes(app: FastifyInstance){
    app.post("/user", createUser);
    app.get("/user/:id", getUserById);
    app.patch("/user/:id", alterInfoUser);
    app.delete("/user/:id", deleteUser);
};