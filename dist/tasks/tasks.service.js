"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_module_1 = require("./task.module");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        let task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new common_1.NotFoundException(`Task With ID ${id} not found`);
        }
        else {
            return task;
        }
    }
    createTask(createTask) {
        const { title, description } = createTask;
        let task = {
            id: uuid_1.v4(),
            title,
            description,
            status: task_module_1.TaskStatus.OPEN
        };
        const tasks = [...this.tasks, task];
        this.tasks = tasks;
        return task;
    }
    deleteTaskByID(id) {
        const task = this.getTaskById(id);
        const tasks = this.tasks.filter((task) => task.id !== id);
        this.tasks = tasks;
    }
    updateTaskStatus(id, status) {
        let task = this.getTaskById(id);
        task.status = status;
        return task;
    }
    getTasksWithFilters(filterDto) {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = this.tasks.filter((task) => task.status === status);
        }
        if (search) {
            tasks = this.tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
        }
        return tasks;
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map