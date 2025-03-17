import { PropsWithChildren } from "react"
import styled, { keyframes } from "styled-components"
import { StyledSpinMaskProps, StyledSpinProps } from "../models"

const KF_ROTATE = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const KF_SPIN_MOVE = keyframes`
  to {
    opacity: 1;
  }
`

const StyledSpin = styled.div<PropsWithChildren<StyledSpinProps>>`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: ${(props) => (props.$isFixed ? "fixed" : "absolute")};
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`

const StyledSpinMask = styled.div<StyledSpinMaskProps>`
  &::before {
    background-color: #0a0b19;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: ${(props) => props.$isOpacity && 0.7};
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`

const StyledSpinDot = styled.span`
  animation: ${KF_ROTATE} 1.2s infinite linear;
  display: inline-block;
  height: 1em;
  position: relative;
  transform: rotate(0);
  width: 1em;
  z-index: 2;
`

const StyledSpinDotItem = styled.i`
  animation: ${KF_SPIN_MOVE} 1s infinite linear alternate;
  background-color: #5d9eff;
  border-radius: 100%;
  display: block;
  height: 2.625rem;
  opacity: 0.3;
  position: absolute;
  transform-origin: 50% 50%;
  transform: scale(0.75);
  width: 2.625rem;
  &:nth-child(1) {
    left: 0;
    top: 0;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
    right: 0;
    top: 0;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
    bottom: 0;
    right: 0;
  }
  &:nth-child(4) {
    animation-delay: 1.2s;
    bottom: 0;
    left: 0;
  }
`

export const Styled = {
  StyledSpin,
  StyledSpinDot,
  StyledSpinDotItem,
  StyledSpinMask,
}
