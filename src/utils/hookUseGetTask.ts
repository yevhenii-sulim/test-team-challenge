import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TodoType } from "./interface";

const getData = () => {
  return axios
    .get<TodoType[]>(
      "https://66cedc40901aab24841fe508.mockapi.io/api/todo/task"
    )
    .then((result) => result.data);
};
export function useGetTask() {
  const { isPending, data, isSuccess } = useQuery({
    queryKey: ["tasks"],
    queryFn: getData,
  });

  return { isPending, data, isSuccess };
}
