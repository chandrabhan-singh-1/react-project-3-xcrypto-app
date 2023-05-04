import { Link } from "react-router-dom";
import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const CoinCard = ({ id, name, image, symbol, price, currencySymbol = "₹" }) => {
  return (
    <>
      <Link to={`/coin/${id}`}>
        <VStack
          bgColor={"mintcream"}
          color={"black"}
          width={"200px"}
          height={"250px"}
          shadow={"lg"}
          py={"8"}
          px={"2"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={image}
            w={"60px"}
            h={"60px"}
            objectFit={"contain"}
            alt={"Coin"}
          />

          <Heading size={"md"} noOfLines={1}>
            {symbol}
          </Heading>

          <Text noOfLines={1} fontSize={"xl"}>
            {name}
          </Text>
          <Text noOfLines={1} fontSize={"xl"}>
            {price ? `${currencySymbol} ${price}` : "NA"}
          </Text>
        </VStack>
      </Link>
    </>
  );
};

export default CoinCard;
