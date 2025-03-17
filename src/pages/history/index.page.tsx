import { NextPage } from "next";
import { useHandle } from "../modules/useHandle";
import { History } from "../../components/templates/History";

const HomePage: NextPage = () => {
  const { isLoading } = useHandle();

  return <History isLoading={isLoading} />;
};

export default HomePage;
