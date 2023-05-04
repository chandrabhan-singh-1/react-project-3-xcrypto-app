import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Stack bgColor={"black"} direction={["column", "column", "row"]}>
        <HStack
          mr={["0", "0", "48", "80"]}
          p={"4"}
          shadow={"base"}
          spacing={"0"}
          justifyContent={"flex-start"}
        >
          <Button fontSize={"xl"} variant={"unstyles"} color={"white"}>
            <Link to={"/"}>Home</Link>
          </Button>

          <Button fontSize={"xl"} variant={"unstyles"} color={"white"}>
            <Link to={"/coins"}>Coins</Link>
          </Button>

          <Button fontSize={"xl"} variant={"unstyles"} color={"white"}>
            <Link to={"/exchanges"}>Exchanges</Link>
          </Button>
        </HStack>
        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={500}
          color={"gold"}
        >
          <Link to={"/"}>XCrypto</Link>
        </Text>
      </Stack>
    </>
  );
};

export default Header;
