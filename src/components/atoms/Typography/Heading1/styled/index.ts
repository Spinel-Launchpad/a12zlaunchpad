import styled, { css } from "styled-components"
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes"
import { StyledTypographyProps } from "../../types"

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledHeading = styled.h1<StyledTypographyProps>`
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
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 2.1875rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 3rem;
    font-weight: 500;
    line-height: 4.05rem;
  }
`

export const Styled = {
  StyledHeading,
}
