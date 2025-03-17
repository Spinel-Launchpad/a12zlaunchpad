import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { StyledTypographyProps } from "../../types"

const { COLOR_TITLE } = Colors

const StyledTitle = styled.p<StyledTypographyProps>`
  color: ${COLOR_TITLE};
  font-size: 1.25rem;
  line-height: 1.6875rem;
  margin: 0;
  ${(props) =>
    props.$isShadow &&
    css`
      text-shadow: 0 0 0.75rem #ffffff4d;
    `}
`

export const Styled = {
  StyledTitle,
}
