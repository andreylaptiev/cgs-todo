import HttpService from './http.service';
import { ITodo, ITodoFormValues } from '../types/todo.type';

class TodoService extends HttpService {
  constructor() {
    super();
  }

  getAllTodo() {
    return this.get({ url: 'todos' }).then((res) => res.data);
  }

  getOneTodo(id: string) {
    return this.get({ url: `todos/${id}` }).then((res) => res.data);
  }

  createTodo(data: ITodoFormValues) {
    return this.post({ url: 'todos/create', data });
  }

  updateTodo({ _id, ...data }: ITodo) {
    return this.put({ url: `todos/update/${_id}`, data });
  }

  deleteTodo(id: string) {
    return this.delete({ url: `todos/delete/${id}` });
  }
};

export default new TodoService;
