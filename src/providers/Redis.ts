import Redis from "ioredis";
import Locals from "./Locals";

const redisConfig = Locals.config().redisConfig;

console.log("Redis Config", redisConfig.host, redisConfig.port);

const clientConnection = new Redis({
    ...redisConfig,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
});

clientConnection.on("connect", () => {
    console.log(`Connected to redis`);
});

clientConnection.on("error", (err) => {
    console.log(`Error in Redis connection ${err}`);
});

clientConnection.on("end", () => {
    console.log("Client disconnected from redis");
});

export default clientConnection;
