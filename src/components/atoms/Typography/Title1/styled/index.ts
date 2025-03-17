import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes"
import { StyledTypographyProps } from "../../types"

const { COLOR_WHITE } = Colors
const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledTitle = styled.p<StyledTypographyProps>`
  color: ${COLOR_WHITE};
  font-weight: 500;
  line-height: 1.9375rem;
  margin: 0;
  ${(props) =>
    props.$isShadow &&
    css`
      text-shadow: 0 0 0.75rem #ffffff4d;
    `}
  @media (${MOBILE_S_DEVICE}) {
    font-size: 1.25rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 2rem;
  }
`

export const Styled = {
  StyledTitle,
}
