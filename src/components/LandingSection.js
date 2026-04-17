import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo0 from "../images/photo0.jpg";

const greeting = "Hello, I am Lolita!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#18181b"
    px={{ base: 6, md: 8 }}
  >
     <VStack spacing={{ base: 3, md: 4 }} textAlign="center">
      <Avatar src={photo0} name="Lolita" boxSize={{ base: "180px", md: "240px" }} />
      <Heading as="h1" size={{ base: "lg", md: "xl" }} color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size={{ base: "sm", md: "md" }} color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size={{ base: "sm", md: "md" }} color="white">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
