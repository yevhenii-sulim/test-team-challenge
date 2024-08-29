import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgToDo};
  border: 2px solid ${({ theme }) => theme.colors.borderToDo};
  border-radius: 8px;
  padding: 10px;
`;
export const Header = styled.header`
  text-align: center;
  h2 {
    font-family: Jost;
    font-size: 22px;
    font-weight: 600;
  }
`;
export const deleteButton = {
  width: "264px",
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
  margin: "auto",
  display: "block",
  "&:hover": {
    color: theme.colors.colorHoverButton,
  },
};
