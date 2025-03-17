import styled from "styled-components"
import { DeviceSizes } from "../../../../shared/const/DeviceSizes"

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledSection = styled.section`
  @media (${MOBILE_S_DEVICE}) {
    margin-top: 1.9375rem;
  }
  @media (${LAPTOP_DEVICE}) {
    margin-top: 7.5rem;
  }
`

export const Styled = {
  StyledSection,
}
