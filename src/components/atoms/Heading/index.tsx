import { FC, Fragment } from "react"
import { Heading1 } from "../Typography"
import { Styled } from "./styled"
import { HeadingProps } from "./types"

const { StyledFaqDescription } = Styled

export const Heading: FC<HeadingProps> = ({ description, heading, ...res }) => (
  <Fragment>
    <Heading1 {...res}>{heading}</Heading1>
    {description && <StyledFaqDescription>{description}</StyledFaqDescription>}
  </Fragment>
)
