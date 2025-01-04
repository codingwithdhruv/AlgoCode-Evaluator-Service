import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server Started at: ${serverConfig.PORT}`);
});

SampleWorker('SampleQueue');

sampleQueueProducer('SampleJob', {
    name: "Dhruv",
    company: "Pryzm",
    position: "Junior Dev",
    location: "Remote | Mumbai | Maharashtra"
});