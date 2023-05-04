import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

import my from "../assets/my.png";

const Footer = () => {
  return (
    <>
      <Box bgColor={"black"} color={"white"} minH={"20"} px={"16"} py={"4"}>
        <Stack
          direction={["column", "column", "row"]}
          h={"full"}
          alignItems={"center"}
        >
          <VStack w={"full"} alignItems={["center", "flex-start"]}>
            <Text fontWeight={"bold"}>About US</Text>
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "center", "left"]}
            >
              We are the best crypto currency related info-sharing webapp in
              India.
              <br /> We provide our guidance and information to more than
              1,00,000+ Crypto Traders in India.
            </Text>
          </VStack>

          <VStack>
            <Avatar src={my} boxSize={"48"} mt={["4", "4", "8"]} />
            <Text textAlign={"center"}>
              CHANDRABHAN SINGH
              <br />
              Creator
            </Text>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
