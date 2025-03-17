import { FC } from "react"
import { TypographyProps } from "../types"
import { Styled } from "./styled"

const { StyledHeading } = Styled

export const Heading5: FC<TypographyProps> = ({
  children,
  isCenter = true,
  isShadow = false,
  ...res
}) => (
  <StyledHeading $isCenter={isCenter} $isShadow={isShadow} {...res}>
    {children}
  </StyledHeading>
)
