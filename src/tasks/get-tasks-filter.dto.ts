import { TaskStatus } from "./task.module";

export class getTaskFilterDto {
    search : string;
    status : TaskStatus
}