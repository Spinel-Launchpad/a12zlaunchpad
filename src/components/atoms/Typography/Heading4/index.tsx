import { FC } from "react"
import { GradientText } from "../GradientText"
import { TypographyProps } from "../types"
import { Styled } from "./styled"

const { StyledHeading } = Styled

export const Heading4: FC<TypographyProps> = ({
  children,
  isCenter = true,
  isShadow = false,
  styleType = "primary",
  ...res
}) => (
  <StyledHeading $isCenter={isCenter} $isShadow={isShadow} {...res}>
    <GradientText styleType={styleType}>{children}</GradientText>
  </StyledHeading>
)
