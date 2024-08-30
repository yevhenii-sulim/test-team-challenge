import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  label {
    margin-bottom: 4px;
  }
  textarea {
    resize: vertical;
    min-height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.borderToDo};
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 16px;
  }
`;
export const CloseChange = styled.button`
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  top: -10px;
  right: 0;
  border: 0;
  outline: none;
`;

export const changeButton = {
  fontSize: "22px",
  fontWeight: "700",
  fontFamily: "Jost",
  color: theme.colors.bgCommon,
  bgcolor: theme.colors.bgButton,
  borderRadius: "6px",
  textAlign: "center",
  padding: "8px 12px",
  lineHeight: 1.4,
  textTransform: "none",
  translate: "all 100ms ease",
  display: "block",

  "&:hover": {
    color: theme.colors.colorHoverButton,
  },
};
