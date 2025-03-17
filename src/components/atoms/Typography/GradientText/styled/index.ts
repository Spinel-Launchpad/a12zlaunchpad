import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { StyledGradientTextProps } from "../../types"

const { COLOR_WHITE } = Colors

const StyledGradientText = styled.span<StyledGradientTextProps>`
  ${(props) =>
    props.$styleType === "primary"
      ? css`
          background-clip: text;
          background-image: radial-gradient(
            43.55% 104.36% at 48.18% 75.02%,
            #8787ff 0%,
            #ffffff 100%
          );
          -webkit-text-fill-color: transparent;
        `
      : props.$styleType === "secondary"
      ? css`
          background-clip: text;
          background-image: radial-gradient(
            43.55% 104.36% at 48.18% 75.02%,
            #4444bc 0%,
            #ffffff 100%
          );
          -webkit-text-fill-color: transparent;
        `
      : css`
          color: ${COLOR_WHITE};
        `}
`

export const Styled = {
  StyledGradientText,
}
