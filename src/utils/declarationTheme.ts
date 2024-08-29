import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgCommon: string;
      bgToDo: string;
      borderToDo: string;
      bgButton: string;
      colorHoverButton: string;
    };
  }
}
