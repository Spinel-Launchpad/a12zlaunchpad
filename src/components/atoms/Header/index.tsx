"use client";
import { FC, Fragment } from "react";
import { Container } from "../Container";
import { IconMenu } from "../Icons";
import { Menu } from "./Menu";
import { MenuMobile } from "./MenuMobile";
import { useHandle } from "./modules/useHandle";
import { Social } from "./Social";
import { Styled } from "./styled";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { disconnectWagmi } from "../../WagmiProvider/WagmiProviderContext";
import Image from "next/image";
import { Images } from "../../../shared/const/Images";
import { useRouter } from "next/router";
import { Routers } from "../../../shared/const/Routers";

const {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderLogo,
  StyledHeaderMobileToggle,
  StyledHeaderRight,
  StyledHistoryButton,
} = Styled;

const { HISTORY_ICON } = Images;
export const Header: FC = () => {
  const { handleToggleActive, isActive, isLaptop } = useHandle();
  const { open } = useWeb3Modal();
  const { address: userAddress } = useAccount();
  const router = useRouter();

  const { HISTORY } = Routers;
  // console.log("userAddress", userAddress);
  const handleConnect = () => {
    if (!userAddress) open({ view: "Networks" });
    else disconnectWagmi();
  };
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContainer>
          <StyledHeaderLeft>
            {!isLaptop && (
              <Fragment>
                <StyledHeaderMobileToggle onClick={handleToggleActive}>
                  <IconMenu />
                </StyledHeaderMobileToggle>
                <MenuMobile
                  handleToggleActive={handleToggleActive}
                  isActive={isActive}
                />
              </Fragment>
            )}
            {/* <StyledHeaderLogo /> */}
            {isLaptop && <Menu />}
          </StyledHeaderLeft>
          <StyledHeaderRight>
            {isLaptop && <Social />}
            {isLaptop && (
              <StyledHistoryButton
                onClick={() => {
                  router.push(HISTORY);
                }}
              >
                <Image src={HISTORY_ICON} width={24} height={24} />
                History
              </StyledHistoryButton>
            )}

            <StyledHeaderButton
              onClick={() => {
                handleConnect();
              }}
            >
              {userAddress
                ? `${userAddress.slice(0, 5)}...${userAddress.slice(-5)}`
                : "Connect wallet"}
            </StyledHeaderButton>
          </StyledHeaderRight>
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};
