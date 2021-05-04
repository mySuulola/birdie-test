import * as express from "express";
import { eventRouter } from "./controllers/event.controller";
import { pingController } from "./controllers/ping";
import * as cors from "cors";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.static('public'));
app.use(cors());

app.use(pingController);
app.use(eventRouter);

export default app;
