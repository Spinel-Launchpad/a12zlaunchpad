import { FC } from "react"
import { PropsWithChildren } from "../../../shared/types"
import { Styled } from "./styled"

const { StyledContainer } = Styled

export const Container: FC<PropsWithChildren> = ({ children, ...res }) => (
  <StyledContainer {...res}>{children}</StyledContainer>
)
