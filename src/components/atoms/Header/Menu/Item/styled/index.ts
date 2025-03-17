import { HTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { Colors } from "../../../../../../shared/const/Colors"
import { DeviceSizes } from "../../../../../../shared/const/DeviceSizes"
import { HTMLAnchorElementType } from "../../../../../../shared/types"
import { StyledFaqItemProps } from "../../../types"

const { COLOR_BORDER, COLOR_WHITE } = Colors
const { LAPTOP_DEVICE } = DeviceSizes

const StyledHeaderMenuItemHref = styled.a<HTMLAnchorElementType>`
  color: ${COLOR_BORDER};
  @media (${LAPTOP_DEVICE}) {
    padding: 0 0.75rem;
  }
`

const StyledHeaderMenuItemLabel = styled.span<HTMLAttributes<HTMLSpanElement>>`
  align-items: center;
  color: ${COLOR_BORDER};
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  @media (${LAPTOP_DEVICE}) {
    padding: 0 0.75rem;
  }
`

const StyledHeaderMenuDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  @media (${LAPTOP_DEVICE}) {
    background: #110d21;
    border-radius: 0.5rem;
    border: 0.0625rem solid #39395c;
    display: none;
    gap: 0.5rem;
    left: 0;
    margin-top: 0.75rem;
    padding: 0.75rem;
    position: absolute;
    top: 100%;
    width: auto;
  }
`

const StyledHeaderMenuDropdownItem = styled.li<HTMLAttributes<HTMLLIElement>>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  ${StyledHeaderMenuItemHref} {
    color: #7f7f87;
    padding: 0;
    @media (${LAPTOP_DEVICE}) {
      color: ${COLOR_BORDER};
    }
  }
  @media (${LAPTOP_DEVICE}) {
    margin-top: 0;
  }
`

const StyledHeaderMenuItemIcon = styled.span`
  border-bottom: 0.125rem solid ${COLOR_WHITE};
  border-right: 0.125rem solid ${COLOR_WHITE};
  cursor: pointer;
  display: inline-block;
  height: 0.625rem;
  margin-left: 0.75rem;
  position: relative;
  rotate: -45deg;
  transition: rotate 0.3s ease-in-out;
  width: 0.625rem;
  &:before {
    background-color: ${COLOR_WHITE};
    content: "";
    height: 0.125rem;
    left: 0.0625rem;
    position: absolute;
    rotate: 45deg;
    top: 0.4375rem;
    transform: translateX(-50%);
    width: 0.925rem;
  }
  @media (${LAPTOP_DEVICE}) {
    border-bottom: 0.125rem solid ${COLOR_BORDER};
    border-right: 0.125rem solid ${COLOR_BORDER};
    rotate: 45deg;
    &:before {
      display: none;
    }
  }
`

const StyledHeaderMenuItem = styled.li<StyledFaqItemProps>`
  background-color: #090612;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  position: relative;
  ${StyledHeaderMenuItemIcon} {
    ${(props) =>
      props.$isActive &&
      css`
        rotate: -135deg;
      `}
  }
  ${StyledHeaderMenuDropdown} {
    ${(props) =>
      props.$isActive &&
      css`
        display: flex;
      `}
  }
  @media (${LAPTOP_DEVICE}) {
    background-color: transparent;
    margin: 0 0.75rem;
    padding: 0;
  }
`

export const Styled = {
  StyledHeaderMenuDropdown,
  StyledHeaderMenuDropdownItem,
  StyledHeaderMenuItem,
  StyledHeaderMenuItemHref,
  StyledHeaderMenuItemIcon,
  StyledHeaderMenuItemLabel,
}
