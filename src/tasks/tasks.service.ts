import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
import { Task, TaskStatus } from './task.module';
import { v4 as uuidv4 } from 'uuid';
import { getTaskFilterDto } from './get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks(): Task[]{
        return this.tasks
    }
    getTaskById(id : string): Task{
        let task: Task = this.tasks.find((task : Task) => task.id === id)
        if(!task){
            throw new NotFoundException(`Task With ID ${id} not found`)
        }else {
            return task
        }
    }
    createTask(createTask: CreateTaskDto): Task{
        const {title , description} = createTask
        let task : Task = {
            id : uuidv4(),
            title,
            description,
            status : TaskStatus.OPEN
            
        }
        const tasks : Task[] = [...this.tasks , task];
        this.tasks = tasks
        return task
    }

    deleteTaskByID(id: string): void{
        const task = this.getTaskById(id)
        const tasks = this.tasks.filter((task: Task) => task.id !== id);
        this.tasks = tasks
    }
    updateTaskStatus(id : string , status : TaskStatus): Task{
        let task: Task = this.getTaskById(id)
        task.status = status
        return task
    }

    getTasksWithFilters(filterDto : getTaskFilterDto): Task[] {
        const {status , search} = filterDto
        let tasks = this.getAllTasks()

        if(status){
            tasks = this.tasks.filter((task : Task) => task.status === status)
        }
        if(search){
            tasks = this.tasks.filter((task : Task) => task.title.includes(search) || task.description.includes(search))
        }
        
        return tasks

    }
}
