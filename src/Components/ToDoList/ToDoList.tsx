import { ChangeEvent, SyntheticEvent, useState } from "react";
import { TodoType } from "../../utils/interface";
import ToDo from "../ToDo/ToDo";
import { List, Form, createButton } from "./ToDoList.styled";
import { Button } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface TodoListType {
  dataFetch: TodoType[] | undefined;
  deleteTodo: (id: string) => void;
  setDataFetch: (
    task:
      | TodoType[]
      | ((prev: TodoType[] | undefined) => TodoType[] | undefined)
  ) => void;
  //setDataFetch: Dispatch<SetStateAction<TodoType[] | undefined>>;
}

export default function ToDoList(prop: TodoListType) {
  const [valueName, setValueName] = useState<string>("");
  const [valueStatus, setValueStatus] = useState<string>("");
  const [valueTask, setValueTask] = useState<string>("");

  const { dataFetch, deleteTodo, setDataFetch } = prop;

  async function createTodo(task: TodoType) {
    return axios.post(
      `https://66cedc40901aab24841fe508.mockapi.io/api/todo/task`,
      task
    );
  }

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess(data) {
      const newTodo: TodoType = data.data;

      setDataFetch((prev) => (prev ? [...prev, newTodo] : [newTodo]));
      setValueName("");
      setValueStatus("");
      setValueTask("");
    },
  });

  function onSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    createTodoMutation.mutate({
      name: valueName,
      status: valueStatus,
      task: valueTask,
    });
  }

  function handleChangeName(evt: ChangeEvent<HTMLInputElement>): void {
    setValueName(evt.target.value);
  }
  function handleChangeStatus(evt: ChangeEvent<HTMLInputElement>): void {
    setValueStatus(evt.target.value);
  }
  function handleChangeTask(evt: ChangeEvent<HTMLTextAreaElement>): void {
    setValueTask(evt.target.value);
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <label>
          Додати ім'я
          <input type='text' value={valueName} onChange={handleChangeName} />
        </label>
        <label>
          Додати статус
          <input
            type='text'
            value={valueStatus}
            onChange={handleChangeStatus}
          />
        </label>
        <label>
          Додати завдання
          <textarea value={valueTask} onChange={handleChangeTask}></textarea>
        </label>
        <Button type='submit' sx={createButton}>
          Create
        </Button>
      </Form>
      <List>
        {dataFetch &&
          dataFetch.map(({ id, name, status, task }) => (
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
