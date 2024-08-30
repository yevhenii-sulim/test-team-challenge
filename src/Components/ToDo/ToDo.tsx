import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import {
  TodoType,
  TodoTypeProp,
  TypeFetchData,
  TypeFnChangeTodo,
} from "../../utils/interface";
import ChangeComponent from "../ChangeComponent/ChangeComponent";
import { useGetTask } from "../../utils/hookUseGetTask";
import {
  ButtonChange,
  Header,
  Wrapper,
  deleteButton,
  Buttons,
  styleButtonSvgChange,
} from "./ToDo.styled";

export default function ToDo({
  name,
  status,
  task,
  deleteTodo,
  id = "",
}: TodoTypeProp) {
  const [change, setChange] = useState<boolean>(false);
  const { refetch }: TypeFetchData = useGetTask();

  function onChangeTodo(): void {
    setChange(true);
  }
  function onCloseChange() {
    setChange(false);
  }

  async function changeTodo({ id, data }: TypeFnChangeTodo): Promise<TodoType> {
    const putFetching = axios.put(
      `https://66cedc40901aab24841fe508.mockapi.io/api/todo/task/${id}`,
      data
    );
    const result = await putFetching;
    return result.data;
  }

  const changeTodoMutation = useMutation({
    mutationFn: changeTodo,
    async onSuccess() {
      await refetch();
    },
  });

  function onSubmit(evt: SyntheticEvent, status: string, valueTask: string) {
    evt.preventDefault();

    setChange(false);
    changeTodoMutation.mutate({
      id,
      data: {
        name,
        status,
        task: valueTask,
      },
    });
  }

  return (
    <Wrapper>
      <h2>{name}</h2>
      {change ? (
        <ChangeComponent
          onCloseChange={onCloseChange}
          onSubmit={onSubmit}
          valueStatus={status}
          task={task}
        />
      ) : (
        <>
          <Header>
            <p>{status}</p>
          </Header>
          <p>{task}</p>
        </>
      )}

      <Buttons>
        {!change && (
          <Button sx={deleteButton} onClick={() => deleteTodo(id)}>
            Delete
          </Button>
        )}

        <ButtonChange type='button' onClick={onChangeTodo}>
          <DriveFileRenameOutlineIcon sx={styleButtonSvgChange} />
        </ButtonChange>
      </Buttons>
    </Wrapper>
  );
}
