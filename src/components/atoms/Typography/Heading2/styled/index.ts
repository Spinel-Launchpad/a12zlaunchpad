import styled, { css } from "styled-components"
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes"
import { StyledTypographyProps } from "../../types"

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledHeading = styled.h2<StyledTypographyProps>`
  font-weight: 500;
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
    font-size: 2rem;
    line-height: 2.7rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 2.5rem;
    line-height: 3.375rem;
  }
`

export const Styled = {
  StyledHeading,
}
