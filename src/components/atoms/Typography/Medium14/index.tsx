import { FC } from "react"
import { TypographyProps } from "../types"
import { Styled } from "./styled"

const { StyledMedium } = Styled

export const Medium14: FC<TypographyProps> = ({
  children,
  isShadow = false,
  ...res
}) => (
  <StyledMedium $isCenter={false} $isShadow={isShadow} {...res}>
    {children}
  </StyledMedium>
)
