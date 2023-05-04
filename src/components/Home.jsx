import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

import img from "../assets/Bitcoin2.png";

const Home = () => {
  return (
    <>
      <Box bgColor={"black"} w={"full"} h={"85vh"}>
        {/* <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={500}
          color={"gold"}
          mt={["0", "0", "-20"]}
          pl={"8"}
        >
          XCrypto
        </Text> */}
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "30px",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            w={"full"}
            h={"full"}
            src={img}
            objectFit={"contain"}
            // filter={"grayscale(1)"}
          />
        </motion.div>
        {/* <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={500}
          color={"gold"}
          mt={"-20"}
        >
          XCrypto
        </Text> */}
      </Box>
    </>
  );
};

export default Home;
