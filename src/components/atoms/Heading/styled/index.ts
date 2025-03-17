import styled from "styled-components"
import { DeviceSizes } from "../../../../shared/const/DeviceSizes"

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledFaqDescription = styled.p`
  margin-bottom: 2.625rem;
  margin-top: 1.5rem;
  text-align: center;
  @media (${MOBILE_S_DEVICE}) {
    font-size: 0.875rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 1rem;
  }
`

export const Styled = {
  StyledFaqDescription,
}
