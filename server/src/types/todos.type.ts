// TODO: Put a real interfaces here

interface ITodo {
  userId: string;
  title: string;
  description: string;
  year: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodoParams {
  userId?: string;
  title?: string | object;
  isCompleted?: string;
  isPublic?: string;
  quantity?: number;
}

export interface ITodoFilter {
  userId?: string;
  title?: string | object;
  isCompleted?: string;
  isPublic?: string;
}

export interface ITodoPagination {
  quantity: number;
}

export default ITodo;
