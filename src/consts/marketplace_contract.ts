import type { Chain } from "thirdweb";
import {  ethereum, polygon, base } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x54164bf20DC6D8E311f076A4F28a42e626f5ffA0",
    chain: ethereum,
  },
  {
    address: "0xAAb56022079Eb885d3416ce69E1cde39e7084655",
    chain: polygon,
  },
  {
    address: "0x51761029c30b30E09a379850470af922DF884c25",
    chain: base,
  },
];
