import { NextPage } from "next";
import { Launchpad } from "../components/templates/Launchpad";
import { useHandle } from "./modules/useHandle";

const LaunchpadPage: NextPage = () => {
  const { isLoading } = useHandle();

  return <Launchpad isLoading={isLoading} />;
};

export default LaunchpadPage;
