import { FC } from "react"
import { SpinProps } from "./models"
import { Styled } from "./styled"

const { StyledSpin, StyledSpinDot, StyledSpinDotItem, StyledSpinMask } = Styled

export const Spin: FC<SpinProps> = (props) => {
  const { isFixed, isLoading, isOpacity, ...res } = props

  if (!isLoading) return null

  return (
    <StyledSpin $isFixed={isFixed} {...res}>
      <StyledSpinMask $isOpacity={isOpacity} />
      <StyledSpinDot>
        <StyledSpinDotItem />
        <StyledSpinDotItem />
        <StyledSpinDotItem />
        <StyledSpinDotItem />
      </StyledSpinDot>
    </StyledSpin>
  )
}
