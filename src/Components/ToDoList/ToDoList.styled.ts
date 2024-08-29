import styled from "styled-components";
import { theme } from "../../utils/theme";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 24px;
  li {
    list-style: none;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  * {
    display: block;
    width: 300px;
    textarea {
      resize: vertical;
      min-height: 100px;
      border: 2px solid ${({ theme }) => theme.colors.borderToDo};
      border-radius: 8px;
      padding: 10px;
    }
    input {
      border: 2px solid ${({ theme }) => theme.colors.borderToDo};
      border-radius: 8px;
      padding: 10px;
    }
  }
`;
export const createButton = {
  width: "100px",
  fontSize: "22px",
  fontWeight: "700",
  fontFamily: "Jost",
  color: theme.colors.bgCommon,
  bgcolor: theme.colors.bgButton,
  borderRadius: "6px",
  textAlign: "center",
  padding: "8px 0px",
  lineHeight: 1.4,
  textTransform: "none",
  translate: "all 100ms ease",
  "&:hover": {
    color: theme.colors.colorHoverButton,
  },
};
