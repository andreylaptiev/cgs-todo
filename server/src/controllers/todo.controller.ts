import { Response, Request } from "express";
import { ITodoParams, ITodoPagination, ITodoFilter } from "todos.type";
import TodoService from "../services/todo.service";

export class TodoController {
    constructor(private todoService: TodoService) {}
    async getAllTodo(req: Request, res: Response) {
        const userId = res.locals.user._id;
        const params: ITodoParams = req.query;
        const todoFilter: ITodoFilter = params.isPublic === "true" ?
        {
            isPublic: params.isPublic,
            isCompleted: params.isCompleted,
        } :
        {
            userId: userId,
            isPublic: params.isPublic,
            isCompleted: params.isCompleted,
        };
        const title = params.title;
        if (title) todoFilter.title = { $regex: title, $options: "i" };
        const paginationFilter: ITodoPagination = {
            quantity: params.quantity || 2,
        };
        const todos = await this.todoService.findAll(
            paginationFilter, todoFilter
        );
        return todos;
    }

    async getOneTodo(req: Request, _: Response) {
        const { id } = req.params;
        const todo = await this.todoService.findOne(id);
        return todo;
    }

    async createOneTodo(req: Request, res: Response) {
        const userId = res.locals.user._id;
        const data = {...req.body, userId};
        const todo = await this.todoService.createOne(data);
        return todo;
    }

    async updateOneTodo(req: Request, res: Response) {
        const userId = res.locals.user._id;
        const { id } = req.params;
        const data = {...req.body, userId};
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
