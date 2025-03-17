import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { StyledTypographyProps } from "../../types"

const { COLOR_TEXT_MEDIUM } = Colors

const StyledMedium = styled.p<StyledTypographyProps>`
  color: ${COLOR_TEXT_MEDIUM};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 0.875rem;
  margin: 0;
  ${(props) =>
    props.$isShadow &&
    css`
      text-shadow: 0 0 0.75rem #ffffff4d;
    `}
`

export const Styled = {
  StyledMedium,
}
