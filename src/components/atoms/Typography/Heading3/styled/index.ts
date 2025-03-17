import styled, { css } from "styled-components"
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes"
import { StyledTypographyProps } from "../../types"

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledHeading = styled.h3<StyledTypographyProps>`
  margin: 0;
  ${(props) =>
    props.$isShadow &&
    css`
      text-shadow: 0 0 0.75rem #ffffff4d;
    `}
  font-weight: 500;
  ${(props) =>
    props.$isCenter &&
    css`
      text-align: center;
    `};
  @media (${MOBILE_S_DEVICE}) {
    font-size: 1.25rem;
    line-height: 1.6875rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 2.25rem;
    line-height: 3.0375rem;
  }
`

export const Styled = {
  StyledHeading,
}
