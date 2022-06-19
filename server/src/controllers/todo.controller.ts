import { Response, Request } from "express";
import { ITodoFilter } from "todos.type";
import TodoService from "../services/todo.service";

export class TodoController {
    constructor(private todoService: TodoService) {}
    async getAllTodo(req: Request, res: Response) {
        const userId = res.locals.user._id;
        const filterParams: ITodoFilter = req.query;
        const title = filterParams.title;
        const filter: ITodoFilter = filterParams.isPublic === "true" ?
        {
            isPublic: filterParams.isPublic,
            isCompleted: filterParams.isCompleted,
        } :
        {
            userId: userId,
            isPublic: filterParams.isPublic,
            isCompleted: filterParams.isCompleted,
        };
        if (title) filter.title = { $regex: title, $options: "i" };
        const todos = await this.todoService.findAll(filter);
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
