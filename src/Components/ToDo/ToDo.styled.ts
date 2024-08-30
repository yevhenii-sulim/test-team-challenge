import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgToDo};
  border: 2px solid ${({ theme }) => theme.colors.borderToDo};
  border-radius: 8px;
  padding: 10px;
  h2 {
    font-family: Jost;
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }
`;
export const Header = styled.header`
  text-align: center;
`;
export const deleteButton = {
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
export const ButtonChange = styled.button`
  background-color: transparent;
  display: block;
  border: none;
  cursor: pointer;
  &:hover svg {
    color: ${({ theme }) => theme.colors.bgCommon};
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const styleButtonSvgChange = {
  color: theme.colors.bgButton,
};
