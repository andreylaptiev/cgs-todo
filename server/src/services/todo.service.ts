import ITodo, { ITodoPagination, ITodoParams } from "../types/todos.type";
import Todo from "../models/Todo";

export default class TodoService {
    async findAll({ quantity }: ITodoPagination, filter: ITodoParams) {
        const query = await Todo.find(filter).limit(quantity);
        return query;
    }

    async findOne(id: string) {
        const query = await Todo.findById(id);
        return query;
    }

    async createOne(data: ITodo) {
        const doc = {...data};
        const query = await Todo.create(doc);
        return query;
    }

    async updateOne(id: string, data: ITodo) {
        const filter = {_id: id};
        const doc = {...data};
        const query = await Todo.replaceOne(filter, doc);
        return query;
    }

    async deleteOne(id: string) {
        const filter = {_id: id};
        const query = await Todo.deleteOne(filter);
        return query;
    }
}
