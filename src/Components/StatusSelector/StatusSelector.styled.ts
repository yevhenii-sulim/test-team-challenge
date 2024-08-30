import { theme } from "../../utils/theme";

export const styleSelect = {
  position: "relative",
  width: "100%",
  maxWidth: "300px",
  bgcolor: `${theme.colors.bgToDo}`,
  borderRadius: "8px",
  boxSizing: "border-box",
  border: `1px solid ${theme.colors.borderToDo}`,
  "em, span": {
    fontSize: "16px",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
  },
  ".MuiInputBase-root": {
    fontSize: "16px",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25",
  },
  ".MuiSelect-select": {
    padding: "8px 12px",
    fontSize: "16px",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25",
  },
  '[aria-expanded="true"]~.MuiOutlinedInput-notchedOutline': {
    border: `2px solid ${theme.colors.borderToDo}`,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.colors.borderToDo}`,
  },
};
