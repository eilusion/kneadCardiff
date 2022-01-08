import * as express from "express";

const server = express();
const portNumber = 8000;
const router = express.Router();

router.get("/*", (req, res) => {
    res.send("this is alan and steves chips")
});

server
    .use(router)
    .listen(portNumber, () => console.log(`listening on ${portNumber}`));