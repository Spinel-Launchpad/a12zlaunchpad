import { useAccount, useChainId, useConfig, useWriteContract } from "wagmi";
import ERC20ABI from "./ABI/ERC20.json";
import LAUNCHPAD from "./ABI/Launchpad.json";

import { publicClient } from "./client";
import { NFT_CONTRACT_DATA_ADDRESS, USDT_ADDRESS } from "./constants";

export function writeTransactionLaunchpad(
  functionName: string,
  args: any[],
  value?: bigint
) {
  const { data: hash, error, writeContract, isPending } = useWriteContract();
  const { address: account } = useAccount();
  const chainId = useChainId();
  const config = useConfig();
  const chain = config.chains.find((c) => c.id === chainId);
  function executeContract() {
    writeContract({
      address: NFT_CONTRACT_DATA_ADDRESS as `0x${string}`,
      abi: LAUNCHPAD,
      functionName,
      args,
      account,
      chain: chain,
      ...(value !== null && { value }),
    });
  }
  return {
    hash,
    error,
    isPending,
    executeContract,
  };
}

export async function viewLaunchpad(functionName: string, args: any[]) {
  const data = await publicClient.readContract({
    address: NFT_CONTRACT_DATA_ADDRESS,
    abi: LAUNCHPAD,
    functionName,
    args,
  });
  return data;
}

export async function viewUSDT(functionName: string, args: any[]) {
  const data = await publicClient.readContract({
    address: USDT_ADDRESS,
    abi: ERC20ABI,
    functionName,
    args,
  });
  return data;
}
export function writeTransactionUSDT(
  functionName: string,
  args: any[],
  value?: bigint
) {
  const { data: hash, error, writeContract, isPending } = useWriteContract();
  const { address: account } = useAccount();

  const chainId = useChainId();
  const config = useConfig();
  const chain = config.chains.find((c) => c.id === chainId);
  function executeContract() {
    writeContract({
      address: USDT_ADDRESS,
      abi: ERC20ABI,
      functionName,
      args,
      account,
      chain: chain,
      ...(value !== null && { value }),
    });
  }
  return {
    hash,
    error,
    isPending,
    executeContract,
  };
}

export async function simulateContractLB(functionName: string, args: any[]) {
  console.log("args simulateContractWebapp", args);
  const { result } = await publicClient.simulateContract({
    address: NFT_CONTRACT_DATA_ADDRESS,
    abi: LAUNCHPAD,
    functionName,
    args,
  });

  return result;
}
