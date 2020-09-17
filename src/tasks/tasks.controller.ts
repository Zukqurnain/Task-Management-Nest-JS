import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { stat } from 'fs';
import { CreateTaskDto } from './create-task.dto';
import { getTaskFilterDto } from './get-tasks-filter.dto';
import { Task, TaskStatus } from './task.module';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}
    @Get()
    getAllTask(@Query() filterDto : getTaskFilterDto): Task[]{
        if(Object.keys(filterDto).length){
            return this.getTasksWithFilters(filterDto)
        }
        else {
            return this.taskService.getAllTasks()
        }
    }

    getTasksWithFilters(filterDto : getTaskFilterDto){
        return this.taskService.getTasksWithFilters(filterDto)
    }

    @Get('/:id')
    getTaskByID(@Param('id') id: string): Task{
       return this.taskService.getTaskById(id)
    }

    @Post()
    createTask(@Body() createTaskDto : CreateTaskDto): Task{
        return this.taskService.createTask(createTaskDto)
    }

    @Delete('/:id')
    deleteTaskByID(@Param('id') id: string): Task{
        return this.taskService.getTaskById(id)
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id : string , @Body('status') status : TaskStatus.OPEN): Task{
        return this.taskService.updateTaskStatus(id , status)
    }

}
