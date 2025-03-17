import { FC } from "react"
import { TypographyProps } from "../types"
import { Styled } from "./styled"

const { StyledTitle } = Styled

export const Title3: FC<TypographyProps> = ({
  children,
  isCenter = true,
  isShadow = false,
  ...res
}) => (
  <StyledTitle $isCenter={isCenter} $isShadow={isShadow} {...res}>
    {children}
  </StyledTitle>
)
