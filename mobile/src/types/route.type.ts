type IRootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  Home: {title?: string, isPublic?: boolean, isCompleted?: boolean} | undefined;
  CreateTodo: undefined;
  EditTodo: { id: string };
};

export default IRootStackParamList;
