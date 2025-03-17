import { FC } from "react"
import { TypographyProps } from "../types"
import { Styled } from "./styled"

const { StyledCaption } = Styled

export const Caption14: FC<TypographyProps> = ({
  children,
  isCenter = true,
  isShadow = false,
  ...res
}) => (
  <StyledCaption $isCenter={isCenter} $isShadow={isShadow} {...res}>
    {children}
  </StyledCaption>
)
