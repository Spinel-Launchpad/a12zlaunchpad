import { FC } from "react"
import { Constants } from "../const"
import { Styled } from "./styled"

const { SOCIAL_LIST } = Constants
const {
  StyledHeaderSocialItem,
  StyledHeaderSocialLink,
  StyledHeaderSocialList,
} = Styled

export const Social: FC = () => (
  <StyledHeaderSocialList>
    {SOCIAL_LIST.map((item) => (
      <StyledHeaderSocialItem key={item.link}>
        <StyledHeaderSocialLink href={item.link}>
          {item.icon}
        </StyledHeaderSocialLink>
      </StyledHeaderSocialItem>
    ))}
  </StyledHeaderSocialList>
)
