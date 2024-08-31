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

export default function ToDoList({ data, deleteTodo }: TodoListType) {
  const { refetch }: TypeFetchData = useGetTask();

  const [valueName, setValueName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [valueTask, setValueTask] = useState<string>("");

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
    console.dir(evt.target);

    const form = evt.target as HTMLFormElement;

    if (
      form.elements.namedItem("name") &&
      (form.elements.namedItem("name") as HTMLInputElement).value === ""
    ) {
      (form.elements.namedItem("name") as HTMLInputElement).style.boxShadow =
        "inset 0 0 0 3px red";
      return;
    }

    if (
      form.elements.namedItem("task") &&
      (form.elements.namedItem("task") as HTMLTextAreaElement).value === ""
    ) {
      (form.elements.namedItem("task") as HTMLTextAreaElement).style.boxShadow =
        "inset 0 0 0 3px red";
      return;
    }

    createTodoMutation.mutate({
      name: valueName,
      status: status,
      task: valueTask,
    });
  }

  function handleChangeName(evt: ChangeEvent<HTMLInputElement>): void {
    evt.target.style.boxShadow = "none";
    setValueName(evt.target.value);
  }
  function handleChangeTask(evt: ChangeEvent<HTMLTextAreaElement>): void {
    evt.target.style.boxShadow = "none";
    setValueTask(evt.target.value);
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <label htmlFor='name'>Додати ім'я</label>
        <input
          name='name'
          type='text'
          id='name'
          value={valueName}
          onChange={handleChangeName}
        />
        <StatusSelector status={status} setStatus={setStatus} />
        <label htmlFor='task'>Додати завдання</label>
        <textarea
          name='task'
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
