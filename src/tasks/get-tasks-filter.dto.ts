import { TaskStatus } from "./task.module";
import {IsOptional , IsIn, IsNotEmpty} from "class-validator"

export class getTaskFilterDto {
    @IsOptional()
    @IsNotEmpty()
    search : string;

    @IsOptional()
    @IsIn([TaskStatus.OPEN , TaskStatus.IN_PROGRESS , TaskStatus.DONE])
    status : TaskStatus
}