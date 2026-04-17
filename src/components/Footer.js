import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={{ base: 4, md: 12 }}
          py={{ base: 4, md: 0 }}
          color="white"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          maxWidth="1024px"
          minHeight={16}
        >
          <Text fontSize={{ base: "sm", md: "md" }}>
            Developed by Lolita Gorkavenko • © 2026
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
