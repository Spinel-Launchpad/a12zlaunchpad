// import { Address } from "viem";
import fetchAPI from "./fetchAPI";

export const fetchListInvestByUser = (wallet: any) => {
  return fetchAPI.request({
    method: "get", // Specify the HTTP method
    url: "/get-list-invest-by-address?wallet_address=" + wallet, // Specify the endpoint
  });
};

// export const getPoolsAmount = () => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-pools-amount",
//   });
// };

// export const getTotalRefedAmountByWallet = (wallet: string) => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-total-refed-amount-by-wallet?wallet_address=" + wallet,
//   });
// };

// export const getListRef = (address: any) => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-list-refed?wallet_address=" + address, // Specify the endpoint
//   });
// };

// export const getListParentRef = (address: any) => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-list-parent-refed?wallet_address=" + address, // Specify the endpoint
//   });
// };

// export const get50Total = (address: any) => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-50f-total-bought?wallet_address=" + address, // Specify the endpoint
//   });
// };

// export const getListSuperAdminRefFromPresale = () => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "https://nft-presale.spinel.finance/api/get-list-super-admin-refed?type=0",
//   });
// };

// export const getSuperAdminTotalSaleFromPresale = () => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "https://nft-presale.spinel.finance/api/get-super-admin-total-sale?type=0",
//   });
// };

// export const getListSuperAdminRef = () => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-list-super-admin-refed",
//   });
// };

// export const getSuperAdminTotalSale = () => {
//   return fetchAPI.request({
//     method: "get", // Specify the HTTP method
//     url: "/get-super-admin-total-sale",
//   });
// };

// export const getNonceVerify = (address: Address | undefined) => {
//   return fetchAPI.request({
//     method: "post", // Specify the HTTP method
//     url: "/get-nonce-verify", // Specify the endpoint,
//     data: {
//       walletAddress: address,
//     },
//   });
// };

// export const updateTonWallet = (
//   address: Address | undefined,
//   ton_wallet: string,
//   nonce: any,
//   key?: any
// ) => {
//   return fetchAPI.request({
//     method: "post", // Specify the HTTP method
//     url: "/update-wld-receive-wallet-by-address-nonce", // Specify the endpoint,
//     data: {
//       wld_receive_wallet: ton_wallet,
//       nonce,
//     },
//     headers: {
//       "x-wallet-address": address,
//       "x-signature": key,
//     },
//   });
// };
