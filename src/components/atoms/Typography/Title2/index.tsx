import { FC } from "react"
import { TypographyProps } from "../types"
import { Styled } from "./styled"

const { StyledTitle } = Styled

export const Title2: FC<TypographyProps> = ({
  children,
  isCenter = true,
  isShadow = false,
  onClick,
  ...res
}) => (
  <StyledTitle
    $isCenter={isCenter}
    $isShadow={isShadow}
    onClick={onClick}
    {...res}
  >
    {children}
  </StyledTitle>
)
