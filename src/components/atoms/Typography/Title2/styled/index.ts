import { HTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { Colors } from "../../../../../shared/const/Colors"
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes"
import { StyledTypographyProps } from "../../types"

const { COLOR_WHITE } = Colors
const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledTitle = styled.p<
  HTMLAttributes<HTMLParagraphElement> & StyledTypographyProps
>`
  color: ${COLOR_WHITE};
  margin: 0;
  ${(props) =>
    props.$isShadow &&
    css`
      text-shadow: 0 0 0.75rem #ffffff4d;
    `}
  font-weight: 500;
  @media (${MOBILE_S_DEVICE}) {
    font-size: 1rem;
    line-height: 1.35rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 1.5rem;
    line-height: 2.025rem;
  }
`

export const Styled = {
  StyledTitle,
}
