import Image from "next/image";
import { FC } from "react";
import { Images } from "../../../shared/const/Images";
import { Routers } from "../../../shared/const/Routers";
import { Styled } from "./styled";

const { LOGO_IMAGE } = Images;
const { HOME_ROUTER } = Routers;
const { StyledLaunchpad, StyledLaunchpadBackground, StyledLogo } = Styled;

export const Logo: FC = ({ ...res }) => (
  <StyledLogo href={"/"} onClick={() => (window.location.href = "/")} {...res}>
    <Image
      alt="spinel launchpad"
      height={53}
      priority
      src={LOGO_IMAGE}
      width={112}
    />
    <StyledLaunchpad>
      Launchpad
      <StyledLaunchpadBackground />
    </StyledLaunchpad>
  </StyledLogo>
);
