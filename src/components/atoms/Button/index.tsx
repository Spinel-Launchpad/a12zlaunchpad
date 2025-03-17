import { FC } from "react"
import { Styled } from "./styled"
import { ButtonProps } from "./types"

const { StyledButton, StyledButtonBackground, StyledButtonLabel } = Styled

export const Button: FC<ButtonProps> = ({
  children,
  href,
  htmlType = "button",
  onClick,
  styleType = "primary",
  target,
  ...res
}) => (
  <StyledButton
    onClick={onClick}
    as={htmlType}
    href={href}
    $styleType={styleType}
    target={target}
    {...res}
  >
    <StyledButtonBackground>
      <StyledButtonLabel>{children}</StyledButtonLabel>
    </StyledButtonBackground>
  </StyledButton>
)
