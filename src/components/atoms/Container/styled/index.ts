import styled from "styled-components"
import { DeviceSizes } from "../../../../shared/const/DeviceSizes"

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  width: 100%;
  @media (${MOBILE_S_DEVICE}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (${LAPTOP_DEVICE}) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const Styled = {
  StyledContainer,
}
