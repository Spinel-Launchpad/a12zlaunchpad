import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { StyledTypographyProps } from "../../types"

const { COLOR_WHITE } = Colors

const StyledHeading = styled.h5<StyledTypographyProps>`
  color: ${COLOR_WHITE};
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 2.1875rem;
  margin: 0;
  ${(props) =>
    props.$isShadow &&
    css`
      text-shadow: 0 0 0.75rem #ffffff4d;
    `}
  ${(props) =>
    props.$isCenter &&
    css`
      text-align: center;
    `};
`

export const Styled = {
  StyledHeading,
}
