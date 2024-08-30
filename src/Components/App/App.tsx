import { ThemeProvider } from "styled-components";
import ToDoList from "../ToDoList/ToDoList";
import { theme } from "../../utils/theme";
import { TypeFetchData } from "../../utils/interface";
import { useGetTask } from "../../utils/hookUseGetTask";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function App() {
  const todo: TypeFetchData = useGetTask();
  const { isPending, data, isSuccess, refetch } = todo;

  async function removeTodo(id: string) {
    return axios.delete(
      `https://66cedc40901aab24841fe508.mockapi.io/api/todo/task/${id}`
    );
  }

  const deleteTodoMutation = useMutation({
    mutationFn: removeTodo,
    async onSuccess() {
      await refetch();
    },
  });

  function deleteTodo(id: string): void {
    deleteTodoMutation.mutate(id);
  }

  return (
    <ThemeProvider theme={theme}>
      {isPending && <span>isLoading...</span>}
      {isSuccess && <ToDoList data={data} deleteTodo={deleteTodo} />}
    </ThemeProvider>
  );
}

export default App;
