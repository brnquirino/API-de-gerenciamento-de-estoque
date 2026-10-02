import fastify from "fastify";
import { healthRoutes } from "./routes/health.route";
import { usersRoutes } from "./routes/users.routes";

export const app = fastify({logger: true});

app.register(healthRoutes);
app.register(usersRoutes);