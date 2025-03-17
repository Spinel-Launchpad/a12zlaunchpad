import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { bsc } from "wagmi/chains";
import { disconnect, http } from "@wagmi/core";
import { injected, walletConnect } from "wagmi/connectors";
import { environment } from "../../utils/env";

const chains = [bsc] as const;

const projectId = environment.PROJECT_ID;
const metadata = {
  name: "Web3Modal",
  description: "spinel launchpad",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const config = defaultWagmiConfig({
  chains: chains,
  metadata,
  projectId,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
  // connectors: [injected()],
  connectors: [
    injected(),
    walletConnect({
      projectId: projectId,
    }),
  ],
  transports: {
    [bsc.id]: http(),
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

interface Props {
  children: React.ReactNode;
}
export default function Web3Provider({ children }: Props) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}

export async function disconnectWagmi() {
  await disconnect(config);
}
