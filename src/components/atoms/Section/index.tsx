import { FC } from "react"
import { PropsWithChildren } from "../../../shared/types"
import { Styled } from "./styled"

const { StyledSection } = Styled

export const Section: FC<PropsWithChildren> = ({ children, ...res }) => (
  <StyledSection {...res}>{children}</StyledSection>
)
