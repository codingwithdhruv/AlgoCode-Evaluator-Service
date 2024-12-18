import { Job } from "bullmq";
import { iJob } from "../types/bullMqJobDefinition";

class default SampleJob implements iJob {
    name: string;
    payload?: Record<string, unknown>;
    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = (job: Job) => {
        console.log("Handler of the job called");
    };

    failed = (job?: Job) : void => {
        console.log("Job failed")
        if(job) {
            console.log(job.id)
        }
    }
}