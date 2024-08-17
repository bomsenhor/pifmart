import { client } from "@/consts/client";
import type { NFT } from "thirdweb";
import { useState, useEffect } from "react";

import { MediaRenderer } from "thirdweb/react";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react";

interface NFTCardProps {
  nft: NFT;
  chainId: number;
  contractAddress: string;
}
export function NFTCard({ nft, chainId, contractAddress }: NFTCardProps) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("Unknown item");
  useEffect(() => {
    const thirdwebImg = nft.metadata.image;
    const thirdwebName = nft.metadata.name;
    if (!thirdwebImg || !thirdwebName) {
      fetch("/api/nft/metadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uri: nft.metadata.uri }),
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data?.image ?? image);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setImage(thirdwebImg);
      setName(thirdwebName);
    }
  });
  return (
    <Box
      key={nft.id}
      rounded="12px"
      as={Link}
      href={`/collection/${chainId}/${contractAddress}/token/${nft.id.toString()}`}
      _hover={{ textDecoration: "none" }}
    >
      <Flex direction="column">
        <MediaRenderer client={client} src={image} />
        <Text>{name}</Text>
      </Flex>
    </Box>
  );
}
