import styled from "styled-components";
import { Colors } from "../../../../shared/const/Colors";
import { HTMLAnchorElementType } from "../../../../shared/types";

const { COLOR_BUTTON_SECONDARY } = Colors;

const StyledLogo = styled.a<HTMLAnchorElementType>`
  align-items: center;
  color: ${COLOR_BUTTON_SECONDARY};
  display: inline-flex;
  font-size: 0.875rem;
`;

const StyledLaunchpad = styled.span`
  background-image: linear-gradient(230.98deg, #4444bc -20.07%, #0b0b26 85.83%);
  border-radius: 3.921875rem;
  box-shadow: 0 0 0.625625rem 0 #6a6aea inset;
  margin-left: 0.5rem;
  padding: 0.3125rem 0.5rem;
  position: relative;
`;

const StyledLaunchpadBackground = styled.span`
  background-image: radial-gradient(
    35.42% 35.42% at 50.75% 100%,
    #9898ff 0%,
    #0b0b26 100%
  );
  border-radius: 3.921875rem;
  bottom: -0.15625rem;
  box-shadow: 0 0 0.625625rem 0 #6a6aea inset;
  left: 0;
  padding: 0.3125rem 0.5rem;
  position: absolute;
  right: 0;
  top: 0.15625rem;
  z-index: -1;
`;

export const Styled = {
  StyledLaunchpad,
  StyledLaunchpadBackground,
  StyledLogo,
};
