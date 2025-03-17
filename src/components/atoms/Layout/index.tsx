import Head from "next/head";
import { FC, Fragment, useEffect } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Spin } from "../Spin";
import { Styled } from "./styled";
import { LayoutProps } from "./types";
import { useAccount } from "wagmi";

const { StyledMain } = Styled;

export const Layout: FC<LayoutProps> = (props) => {
  const { children, isLoading, title } = props;
  const { address: userAddress } = useAccount();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const ref = queryParams.get("ref");

    if (ref?.toLowerCase() !== userAddress?.toLowerCase() && ref) {
      localStorage.setItem("ref", ref);
    }
  }, [userAddress]);
  return isLoading ? (
    <Spin isLoading={isLoading} />
  ) : (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <StyledMain>{children}</StyledMain>
      {/* <Footer /> */}
    </Fragment>
  );
};
