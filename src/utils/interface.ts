export interface TodoType {
  id?: string;
  name: string;
  status: string;
  task: string;
}

export interface TodoTypeProp {
  id: string;
  name: string;
  status: string;
  task: string;
  deleteTodo: (id: string) => void;
}
