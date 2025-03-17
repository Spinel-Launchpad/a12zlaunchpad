import { FC, Fragment } from "react";
import { IconArrowRight, IconClose } from "../../Icons";
import { Constants } from "../const";
import { Social } from "../Social";
import { MenuMobileProps } from "../types";
import { Styled } from "./styled";

const { MENU_HEADER_LIST } = Constants;
const {
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
} = Styled;

export const MenuMobile: FC<MenuMobileProps> = ({
  handleToggleActive,
  isActive,
}) => (
  <StyledHeaderMobile $isActive={isActive}>
    <StyledHeaderMobileTop>
      {/* <StyledHeaderLogo /> */}
      <StyledHeaderMobileClose onClick={handleToggleActive}>
        <IconClose />
      </StyledHeaderMobileClose>
    </StyledHeaderMobileTop>
    <StyledHeaderMobileMenu>
      {MENU_HEADER_LIST.map((item) => (
        <StyledHeaderMenuItem key={item.label}>
          {item.items ? (
            <Fragment>
              <StyledHeaderMenuItemLabel>
                {item.label}
              </StyledHeaderMenuItemLabel>
              <StyledHeaderMenuDropdown>
                {item.items.map((menuItem) => (
                  <StyledHeaderMenuDropdownItem key={menuItem.label}>
                    <StyledHeaderMenuItemHref href={menuItem.link}>
                      {menuItem.label}
                      <IconArrowRight />
                    </StyledHeaderMenuItemHref>
                  </StyledHeaderMenuDropdownItem>
                ))}
              </StyledHeaderMenuDropdown>
            </Fragment>
          ) : (
            <StyledHeaderMenuItemHref href={item.link}>
              {item.label}
              <IconArrowRight />
            </StyledHeaderMenuItemHref>
          )}
        </StyledHeaderMenuItem>
      ))}
    </StyledHeaderMobileMenu>
    <Social />
  </StyledHeaderMobile>
);
