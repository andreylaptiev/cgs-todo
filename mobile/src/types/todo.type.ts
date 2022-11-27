export interface ITodoFormValues {
  title: string;
  description: string;
  year: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodo extends ITodoFormValues {
  _id: string;
};

export interface ITodoForm {
  initialValues: ITodoFormValues;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ITodoFormValues) => void;
}
