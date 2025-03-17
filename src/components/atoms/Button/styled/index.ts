import styled, { css } from "styled-components"
import { Colors } from "../../../../shared/const/Colors"
import { Fonts } from "../../../../shared/const/Fonts"
import { StyledButtonProps } from "../types"

const { COLOR_BLACK, COLOR_BUTTON_SECONDARY } = Colors
const { FF_DEFAULT } = Fonts

const StyledButtonBackground = styled.span`
  border-radius: 1rem;
  display: inline-block;
  padding: 0.3125rem;
`

const StyledButtonLabel = styled.span`
  border-radius: 1rem;
  display: inline-block;
  padding: 0.5rem 1.375rem 0.5625rem;
`

const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border-radius: 1rem;
  border: none;
  display: inline-block;
  font-family: ${FF_DEFAULT};
  font-size: 1.25rem;
  line-height: 1.6875rem;
  outline: none;
  padding: 0;
  text-decoration: none;
  &:hover {
    box-shadow: 0 0 1.25rem 0 #6a6aea80;
  }
  ${(props) =>
    props.$styleType === "primary"
      ? css`
          color: ${COLOR_BLACK};
          ${StyledButtonBackground} {
            background-image: radial-gradient(
              35.42% 35.42% at 50.75% 100%,
              #9898ff 0%,
              #0b0b26 100%
            );
            box-shadow: 0 0 0.5625rem 0 #6a6aea inset;
          }
          ${StyledButtonLabel} {
            background-image: linear-gradient(
              230.98deg,
              #e1e1ff -20.07%,
              #a3a3ef 85.83%
            );
          }
        `
      : props.$styleType === "secondary" &&
        css`
          color: ${COLOR_BUTTON_SECONDARY};
          ${StyledButtonBackground} {
            background-image: radial-gradient(
              35.42% 35.42% at 50.75% 100%,
              #9898ff 0%,
              #0b0b26 100%
            );
            box-shadow: 0 0 0.5625rem 0 #6a6aea inset;
          }
          ${StyledButtonLabel} {
            background-image: linear-gradient(
              230.98deg,
              #4444bc -20.07%,
              #0b0b26 85.83%
            );
          }
        `}
`

export const Styled = {
  StyledButton,
  StyledButtonBackground,
  StyledButtonLabel,
}
