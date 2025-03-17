import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../../../../../shared/const/Colors";
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes";
import { HTMLAnchorElementType } from "../../../../../shared/types";
import { Logo } from "../../../Logo";
import { StyledHeaderMobileProps } from "../../types";

const { COLOR_TITLE } = Colors;
const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes;

const StyledHeaderLogo = styled(Logo)`
  @media (${MOBILE_S_DEVICE}) {
    > span {
      &:first-child {
        width: 5.3875rem !important;
      }
    }
  }
  @media (${LAPTOP_DEVICE}) {
    > span {
      &:first-child {
        width: 7rem !important;
      }
    }
  }
`;

const StyledHeaderMenuItemHref = styled.a<HTMLAnchorElementType>`
  align-items: center;
  color: ${COLOR_TITLE};
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderMenuItemLabel = styled.span`
  align-items: center;
  color: ${COLOR_TITLE};
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderMenuDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledHeaderMenuDropdownItem = styled.li<HTMLAttributes<HTMLLIElement>>`
  margin-top: 0.5rem;
  ${StyledHeaderMenuItemHref} {
    color: #7f7f87;
    padding: 0;
  }
`;

const StyledHeaderMenuItem = styled.li<HTMLAttributes<HTMLLIElement>>`
  background-color: #090612;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  position: relative;
`;

const StyledHeaderMobile = styled.div<StyledHeaderMobileProps>`
  background: #110d21;
  height: 100vh;
  left: 0;
  opacity: 0;
  padding: 1rem;
  position: fixed;
  top: 0;
  transform: translateX(-19.25rem);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  width: 19.25rem;
  z-index: 99;
  ${(props) =>
    props.$isActive &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const StyledHeaderMobileTop = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  margin-bottom: 1.625rem;
`;

const StyledHeaderMobileClose = styled.div<HTMLAttributes<HTMLDivElement>>``;

const StyledHeaderMobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Styled = {
  StyledHeaderLogo,
  StyledHeaderMenuDropdown,
  StyledHeaderMenuDropdownItem,
  StyledHeaderMenuItem,
  StyledHeaderMenuItemHref,
  StyledHeaderMenuItemLabel,
  StyledHeaderMobile,
  StyledHeaderMobileClose,
  StyledHeaderMobileMenu,
  StyledHeaderMobileTop,
};
