import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@mui/material";
import { TodoTypeProp } from "../../utils/interface";
import { Header, Wrapper, deleteButton } from "./ToDo.styled";

export default function ToDo({
  name,
  status,
  task,
  deleteTodo,
  id = "",
}: TodoTypeProp) {
  // const queryClient = useQueryClient();

  // async function changeTodo(id: string) {
  //   return axios.put(
  //     `https://66cedc40901aab24841fe508.mockapi.io/api/todo/task/${id}`
  //   );
  // }

  // const changeTodoMutation = useMutation({
  //   mutationFn: changeTodo,
  //   onSuccess: (data) => {
  //     queryClient.setQueryData(["changeTask"], data);
  //   },
  // });

  return (
    <Wrapper>
      <Header>
        <h2>{name}</h2>
        <p>{status}</p>
      </Header>
      <p>{task}</p>
      <Button type='submit' sx={deleteButton} onClick={() => deleteTodo(id)}>
        Delete
      </Button>
    </Wrapper>
  );
}
