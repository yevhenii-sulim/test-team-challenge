import { ThemeProvider } from "styled-components";
import ToDoList from "../ToDoList/ToDoList";
import { theme } from "../../utils/theme";
import { TodoType } from "../../utils/interface";
import { useGetTask } from "../../utils/hookUseGetTask";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface TypeFetchData {
  data: TodoType[] | undefined;
  isPending: boolean;
  isSuccess: boolean;
}
function App() {
  const todo: TypeFetchData = useGetTask();

  const { isPending, data, isSuccess } = todo;

  const [dataFetch, setDataFetch] = useState<TodoType[] | undefined>(undefined);

  useEffect(() => {
    setDataFetch(data);
  }, [data]);

  async function removeTodo(id: string) {
    return axios
      .delete(`https://66cedc40901aab24841fe508.mockapi.io/api/todo/task/${id}`)
      .then((result) =>
        setDataFetch((prev) =>
          prev ? prev.filter(({ id }) => id !== result.data.id) : undefined
        )
      );
  }

  const deleteTodoMutation = useMutation({
    mutationFn: removeTodo,
  });

  function deleteTodo(id: string): void {
    deleteTodoMutation.mutate(id);
  }

  return (
    <ThemeProvider theme={theme}>
      {isPending && <span>isLoading...</span>}
      {isSuccess && (
        <ToDoList
          dataFetch={dataFetch}
          deleteTodo={deleteTodo}
          setDataFetch={setDataFetch}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
