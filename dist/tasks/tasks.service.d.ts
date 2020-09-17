import { CreateTaskDto } from './create-task.dto';
import { Task, TaskStatus } from './task.module';
import { getTaskFilterDto } from './get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTask: CreateTaskDto): Task;
    deleteTaskByID(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    getTasksWithFilters(filterDto: getTaskFilterDto): Task[];
}
