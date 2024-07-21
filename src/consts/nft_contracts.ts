import type { Chain } from "thirdweb";
import { ethereum, polygon, base } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x557500c767785ce9d28c620de01740825f965fdb",
    chain: polygon,
    title: "Pink Eye the Clown",
    thumbnailUrl:
      "https://i.seadn.io/s/raw/files/8e8618388848b95241184d1344704f13.gif",
    type: "ERC721",
  },
  {
    address: "0x1024ce6b79f266ba10a20ddb87793af2c2b196d7",
    chain: polygon,
    title: "Ten Little Duper Frogs",
    thumbnailUrl:
      "https://i.seadn.io/s/raw/files/1bc62b50ee2401aee284643c4e4c1350.gif",
    type: "ERC721",
  },
  {
    address: "0x7991b42B4130978e865A61557e47F38a705bA1e4",
    chain: polygon,
    title: "Dreamlike Visions",
    thumbnailUrl:
      "https://i.seadn.io/s/raw/files/0a65e98c70fe1b306d45ce59e4832ca0.jpg",
    type: "ERC721",
  },
  {
    address: "0xCa72fe5242f4043892fd695C7CE228a648271C67",
    chain: polygon,
    title: "Crypt Social Club",
    thumbnailUrl:
      "https://i.seadn.io/s/raw/files/8f34ed881789e93d2718fdd1feb55865.webp",
    type: "ERC721",
    slug: "crypt-social-club-project",
  },
  {
    address:  "0x3B9edBC42bA4ACEDb4f2Aa290aEFBb40cd10fCAc",
    chain: ethereum,
    title: "Pirate Apes",
    thumbnailUrl: "https://i.seadn.io/s/raw/files/84a605dbb2e3c70a55852c6fd3e79b31.gif",
    type: "ERC721",
  },
  {
    address:  "0x71772bEFF1FB348Eb7d5f9F1E0b5f11Bc49aB5e4",
    chain: ethereum,
    title: "The Appreciators NFT",
    thumbnailUrl: "https://i.seadn.io/gcs/files/a0f4e3e1b928fa3eecafccadb16aaece.jpg",
    type: "ERC721",
    slug: "theappreciators-nft"
  },
/**
  {
    address:  "0xe34b204B32ef3DF0818Fa0e4d3bf076Ca5f3C181",
    chain: ethereum,
    title: "Appreciators Companions",
    thumbnailUrl: "https://i.seadn.io/gcs/files/7e5ed1c112650708022be08466848500.jpg",
    type: "ERC721",
    slug: "appreciators-companions"
  },
/** 
  {
    address: "0x6b2ef4b0dda234bb0a73b12c69558e578c747e35",
    chain: ethereum,
    title: "Wandering through the Mind Realm in AI",
    thumbnailUrl:
      "https://i.seadn.io/s/raw/files/b1f889f929f2ae024490fb2910b0ab1b.jpg",
    type: "ERC1155",
    slug: "wandering-through-the-mind-realm-in-ai",
  },
  {
    address: "0x2e5B1560e5ba01bF098ACaA82a89Fe34EA709CE5",
    chain: ethereum,
    title: "Little man! x Rorschach's",
    thumbnailUrl:
      "https://i.seadn.io/gcs/files/c035f5a23ceb6d6f331ce0a0e6b9cb51.jpg",
    type: "ERC721",
    slug: "little-man-x-rorschach-s",
  },
  {
    address: "0x0734Fa12e5d8d793B54FbCA48173934DF5de76FB",
    chain: ethereum,
    title: "Machu Picchu by JayBomSenhor",
    thumbnailUrl:
      "https://i.seadn.io/gcs/files/36c3ed6549a25e4f1d2a281a55ab009c.png",
    type: "ERC721",
    slug: "machu-picchu-by-jaybomsenhor",
  },
  {
    address:  "0xC379e535CaFf250a01CAa6C3724Ed1359Fe5c29B",
    chain: ethereum,
    title: "The Plague",
    type: "ERC721",
    slug: "the-plague"
  },
**/
];
