import HttpService from './http.service';
import { ITodo, ITodoFilter, ITodoFormValues } from '../types/todo.type';
import { QueryFunctionContext } from 'react-query';

class TodoService extends HttpService {
  constructor() {
    super();
  }

  getAllTodo({
    queryKey,
  }: QueryFunctionContext<string | readonly unknown[], ITodoFilter>) {
    return this.get({ url: 'todos', params: queryKey[1] })
        .then((res) => res.data);
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
