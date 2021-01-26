import styled, { css } from "styled-components";
import { theme } from "../_tokens";

const Button = styled.button`
  background-color: ${(props) => props.bgColor || theme.button.default.bgColor};
  color: ${(props) => props.textColor || theme.button.default.textColor};
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${theme.button.primary.bgColor};
      color: ${theme.button.primary.textColor};
    `};
`;

export { Button };
