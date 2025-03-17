import { FC } from "react";
import { HomeProps } from "../../../pages/modules/types";
import { Layout } from "../../atoms/Layout";
import Hero from "../../molecules/Launchpad/Hero";
import Deposit from "../../molecules/Launchpad/Deposit";
// import TapComponent from "../../atoms/Tap";

export const Launchpad: FC<HomeProps> = ({ isLoading }) => (
  <Layout isLoading={isLoading} title="Spinel Launchpad | Home">
    <Hero />
    <Deposit />
    {/* <TapComponent /> */}
  </Layout>
);
