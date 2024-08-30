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
export interface TypeFetchData {
  data: TodoType[] | undefined;
  isPending: boolean;
  isSuccess: boolean;
  refetch: () => void;
}
export interface TypeFnChangeTodo {
  id: string;
  data: TodoType;
}
