import { HTMLAttributes } from "react"
import styled from "styled-components"
import { Colors } from "../../../../shared/const/Colors"
import { DeviceSizes } from "../../../../shared/const/DeviceSizes"
import { HTMLAnchorElementType } from "../../../../shared/types"
import { IconMail } from "../../Icons"

const { COLOR_FOOTER, COLOR_LINK, COLOR_WHITE } = Colors
const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes

const StyledFooter = styled.footer`
  color: ${COLOR_FOOTER};
  padding-top: 0.75rem;
  padding-bottom: 2.4375rem;
  @media (${MOBILE_S_DEVICE}) {
    margin-top: 1.9375rem;
  }
  @media (${LAPTOP_DEVICE}) {
    margin-top: 7.5rem;
  }
`

const StyledFooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledFooterLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  @media (${MOBILE_S_DEVICE}) {
    order: 2;
  }
  @media (${LAPTOP_DEVICE}) {
    order: initial;
  }
`

const StyledFooterHeader = styled.div`
  color: ${COLOR_WHITE};
  font-weight: 700;
  line-height: 1rem;
  margin-bottom: 1.25rem;
  margin-top: 1.641875rem;
`

const StyledFooterMenu = styled.div``

const StyledFooterMenuList = styled.ul<HTMLAttributes<HTMLUListElement>>`
  list-style: none;
  margin: 0;
  padding: 0;
  @media (${MOBILE_S_DEVICE}) {
    min-width: 33.33%;
    flex: 0 0 33.33%;
    &:first-child,
    &:last-child {
      max-height: 6.875rem;
    }
    &:last-child {
      transform: translateY(-7.5rem);
    }
  }
  @media (${LAPTOP_DEVICE}) {
    min-width: initial;
    flex: initial;
    &:first-child,
    &:last-child {
      max-height: initial;
    }
    &:last-child {
      transform: initial;
    }
  }
`

const StyledFooterMenuItem = styled.li<HTMLAttributes<HTMLLIElement>>`
  font-size: 0.875rem;
  line-height: 0.875rem;
  margin-top: 1rem;
`

const StyledFooterMenuLink = styled.a<HTMLAnchorElementType>`
  color: ${COLOR_LINK};
`

const StyledFooterMenuIcon = styled.span`
  margin-right: 0.5rem;
  svg {
    width: 1rem;
  }
`

const StyledFooterRight = styled.div`
  width: 100%;
  @media (${MOBILE_S_DEVICE}) {
    margin-bottom: 2rem;
    max-width: 100%;
    order: 1;
    text-align: center;
  }
  @media (${LAPTOP_DEVICE}) {
    margin-bottom: 0;
    margin-left: 8.75rem;
    max-width: 15.625rem;
    order: initial;
    text-align: right;
  }
`

const StyledFooterRightDescription = styled.div`
  margin-bottom: 1.320625rem;
`

const StyledFooterRightMail = styled.a<HTMLAnchorElementType>`
  color: ${COLOR_FOOTER};
`

const StyledFooterRightIcon = styled(IconMail)`
  color: #4444bc;
  margin-right: 0.3125rem;
  vertical-align: middle;
`

export const Styled = {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterHeader,
  StyledFooterLeft,
  StyledFooterMenu,
  StyledFooterMenuIcon,
  StyledFooterMenuItem,
  StyledFooterMenuLink,
  StyledFooterMenuList,
  StyledFooterRight,
  StyledFooterRightDescription,
  StyledFooterRightIcon,
  StyledFooterRightMail,
}
