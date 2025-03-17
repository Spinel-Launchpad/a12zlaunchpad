import { FC } from "react";
import { Routers } from "../../../shared/const/Routers";
import { Container } from "../Container";
// import { Logo } from "../Logo";
import { Constants } from "./const";
import { Styled } from "./styled";

const { MENU_FOOTER_LIST } = Constants;
const { MAIL_ROUTER } = Routers;
const {
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
} = Styled;

export const Footer: FC = () => (
  <StyledFooter>
    <Container>
      <StyledFooterContainer>
        <StyledFooterLeft>
          {MENU_FOOTER_LIST.map((item) => (
            <StyledFooterMenuList key={item.heading}>
              <StyledFooterHeader>{item.heading}</StyledFooterHeader>
              <StyledFooterMenu>
                {item.items.map((menuItem) => (
                  <StyledFooterMenuItem key={menuItem.link}>
                    <StyledFooterMenuLink href={menuItem.link}>
                      {menuItem.icon && (
                        <StyledFooterMenuIcon>
                          {menuItem.icon}
                        </StyledFooterMenuIcon>
                      )}
                      {menuItem.label}
                    </StyledFooterMenuLink>
                  </StyledFooterMenuItem>
                ))}
              </StyledFooterMenu>
            </StyledFooterMenuList>
          ))}
        </StyledFooterLeft>
        <StyledFooterRight>
          {/* <Logo /> */}
          <StyledFooterRightDescription>
            Please contact us if you have any specific idea or request
          </StyledFooterRightDescription>
          <StyledFooterRightMail href={MAIL_ROUTER}>
            <StyledFooterRightIcon />
            contact@spinel.launchpad
          </StyledFooterRightMail>
        </StyledFooterRight>
      </StyledFooterContainer>
    </Container>
  </StyledFooter>
);
