import { ChangeEvent, SyntheticEvent, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StatusSelector from "../StatusSelector/StatusSelector";
import { Form, CloseChange, changeButton } from "./ChangeComponent.styled";
import { Button } from "@mui/material";

interface ChangeComponentProps {
  onSubmit: (evt: SyntheticEvent, status: string, valueTask: string) => void;
  valueStatus: string;
  task: string;
  onCloseChange: () => void;
}

export default function ChangeComponent({
  onSubmit,
  valueStatus,
  task,
  onCloseChange,
}: ChangeComponentProps) {
  const [status, setStatus] = useState<string>(valueStatus);
  const [valueTask, setValueTask] = useState<string>(task);

  function handleChangeTask(evt: ChangeEvent<HTMLTextAreaElement>): void {
    setValueTask(evt.target.value);
  }

  return (
    <Form onSubmit={(evt) => onSubmit(evt, status, valueTask)}>
      <CloseChange onClick={onCloseChange}>
        <CloseIcon />
      </CloseChange>

      <StatusSelector status={status} setStatus={setStatus} />
      <label htmlFor='task'>Додати завдання</label>
      <textarea
        value={valueTask}
        id='task'
        onChange={handleChangeTask}
      ></textarea>
      <Button type='submit' sx={changeButton}>
        Change
      </Button>
    </Form>
  );
}
