import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
    console.log(`Server Started at: ${serverConfig.PORT}`);
});
console.log(`Bullboard Dashboard Running on: http://localhost:${serverConfig.PORT}/ui`);

SampleWorker('SampleQueue');

