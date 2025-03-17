import { FC } from "react"
import { GradientTextProps } from "../types"
import { Styled } from "./styled"

const { StyledGradientText } = Styled

export const GradientText: FC<GradientTextProps> = ({
  children,
  styleType = "primary",
}) => <StyledGradientText $styleType={styleType}>{children}</StyledGradientText>
