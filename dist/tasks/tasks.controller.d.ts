import { CreateTaskDto } from './create-task.dto';
import { getTaskFilterDto } from './get-tasks-filter.dto';
import { Task, TaskStatus } from './task.module';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTask(filterDto: getTaskFilterDto): Task[];
    getTasksWithFilters(filterDto: getTaskFilterDto): Task[];
    getTaskByID(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    deleteTaskByID(id: string): Task;
    updateTaskStatus(id: string, status: TaskStatus.OPEN): Task;
}
