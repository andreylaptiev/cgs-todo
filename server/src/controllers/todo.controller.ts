import { Response, Request } from "express";
import TodoService from "../services/todo.service";

export class TodoController {
    constructor(private todoService: TodoService) {}
    async getAllTodo(_req: Request, _res: Response) {
        // TODO: Write your implementation here
        const todos = await this.todoService.findAll();
        return todos;
    }

    async getOneTodo(req: Request, _: Response) {
        const { id } = req.params;
        const todo = await this.todoService.findOne(id);
        return todo;
    }

    async createOneTodo(req: Request, _res: Response) {
        const data = req.body;
        const todo = await this.todoService.createOne(data);
        return todo;
    }

    async updateOneTodo(req: Request, _: Response) {
        const { id } = req.params;
        const data = req.body;
        const todo = await this.todoService.updateOne(id, data);
        return todo;
    }

    async deleteOneTodo(req: Request, _: Response) {
        const { id } = req.params;
        const todo = await this.todoService.deleteOne(id);
        return todo;
    }
}

const todoController = new TodoController(new TodoService());
export default todoController;
