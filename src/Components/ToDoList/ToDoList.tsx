import { ChangeEvent, SyntheticEvent, useState } from "react";
import { TodoType, TypeFetchData } from "../../utils/interface";
import ToDo from "../ToDo/ToDo";
import { List, Form, createButton } from "./ToDoList.styled";
import { Button } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useGetTask } from "../../utils/hookUseGetTask";
import StatusSelector from "../StatusSelector/StatusSelector";

interface TodoListType {
  data: TodoType[] | undefined;
  deleteTodo: (id: string) => void;
}

export default function ToDoList(prop: TodoListType) {
  const { refetch }: TypeFetchData = useGetTask();

  const [valueName, setValueName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [valueTask, setValueTask] = useState<string>("");

  const { data, deleteTodo } = prop;

  async function createTodo(task: TodoType) {
    return axios.post(
      `https://66cedc40901aab24841fe508.mockapi.io/api/todo/task`,
      task
    );
  }

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    async onSuccess() {
      await refetch();
      setValueName("");
      setStatus("");
      setValueTask("");
    },
  });

  function onSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    createTodoMutation.mutate({
      name: valueName,
      status: status,
      task: valueTask,
    });
  }

  function handleChangeName(evt: ChangeEvent<HTMLInputElement>): void {
    setValueName(evt.target.value);
  }
  function handleChangeTask(evt: ChangeEvent<HTMLTextAreaElement>): void {
    setValueTask(evt.target.value);
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <label htmlFor='name'>Додати ім'я</label>
        <input
          type='text'
          id='name'
          value={valueName}
          onChange={handleChangeName}
        />
        <StatusSelector status={status} setStatus={setStatus} />
        <label htmlFor='task'>Додати завдання</label>
        <textarea
          value={valueTask}
          id='task'
          onChange={handleChangeTask}
        ></textarea>
        <Button type='submit' sx={createButton}>
          Create
        </Button>
      </Form>
      <List>
        {data &&
          data.map(({ id, name, status, task }) => (
            <li key={id}>
              <ToDo
                id={id || ""}
                deleteTodo={deleteTodo}
                name={name}
                status={status}
                task={task}
              />
            </li>
          ))}
      </List>
    </>
  );
}
