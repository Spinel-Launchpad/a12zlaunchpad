import { createPublicClient, http } from "viem";
import { bsc } from "viem/chains";

export const publicClient = createPublicClient({
  chain: bsc,
  transport: http(),
});
