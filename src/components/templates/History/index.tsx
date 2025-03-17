import { FC } from "react";
// import { HomeProps } from "../../../pages/modules/types";
import { Layout } from "../../atoms/Layout";
import TableHistory from "../../molecules/History/Table";

export const History = ({ isLoading }) => (
  <Layout isLoading={isLoading} title="Spinel Launchpad | Home">
    <TableHistory />
  </Layout>
);
