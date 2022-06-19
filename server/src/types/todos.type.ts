// TODO: Put a real interfaces here

interface ITodo {
  userId: string;
  title: string;
  description: string;
  year: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodoFilter {
  userId?: string;
  title?: string | object;
  isCompleted?: string;
  isPublic?: string;
}

export default ITodo;
