import type { Chain } from "thirdweb";
import { ethereum, polygon, base } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: ethereum,
    tokens: [
      {
        tokenAddress: "0x726516B20c4692a6beA3900971a37e0cCf7A6BFf",
        symbol: "FRG",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
    ],
  },
  {
    chain: polygon,
    tokens: [
      {
        tokenAddress: "0x410fa99e86bf52c27343B9A8389C59FEf2930ee1",
        symbol: "0xPiF",
        icon: "/native-token-icons/matic.png",
      },
      {
        tokenAddress: "0xf390A82F731706cf3739c3543569Faf021733820",
        symbol: "DBL",
        icon: "/native-token-icons/matic.png",
      },
      {
        tokenAddress: "0x94d840c841fF96Eb842012c161D96B7715C92622",
        symbol: "APP",
        icon: "/native-token-icons/matic.png",
      },
    ],
  },
  {
    chain: base,
    tokens: [
      {
        tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x3C5D7fB67B2fFfF7953D9F5D6a578eA97A679E9B",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
    ],
  },
];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  [ethereum.id]: "/native-token-icons/eth.png",
  [polygon.id]: "/native-token-icons/avax.png",
  [base.id]: "/native-token-icons/matic.png",
};
