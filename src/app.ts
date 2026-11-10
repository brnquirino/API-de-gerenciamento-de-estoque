import fastify from "fastify";
import { healthRoutes } from "./routes/health.route";
import { usersRoutes } from "./routes/users.routes";
import { poolPromise } from "./database/connection";

export const app = fastify({logger: true});

app.register(healthRoutes);
app.register(usersRoutes);
app.addHook("onClose", async ()=>{
    const pool = await poolPromise;
    
    await pool.close(10);
});