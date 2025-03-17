import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes"
import { StyledTypographyProps } from "../../types"

const { COLOR_CAPTION_14 } = Colors
const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledCaption = styled.p<StyledTypographyProps>`
  color: ${COLOR_CAPTION_14};
  font-size: 0.875rem;
  font-weight: 700;
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
  @media (${MOBILE_S_DEVICE}) {
    line-height: 0.875rem;
    text-transform: capitalize;
  }
  @media (${LAPTOP_DEVICE}) {
    line-height: 1.340625rem;
    text-transform: uppercase;
  }
`

export const Styled = {
  StyledCaption,
}
