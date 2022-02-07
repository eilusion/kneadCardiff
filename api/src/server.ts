import * as express from "express";
import { getClientApp } from "./routes/getClientApp";

const server = express();
const portNumber = 8000;
const router = express.Router();

router.use("/dist", express.static(`${process.cwd()}/dist/bundled`))
router.get("/*", getClientApp);

server
    .use(router)
    .listen(portNumber, () => console.log(`listening on ${portNumber}`));