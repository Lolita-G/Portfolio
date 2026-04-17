import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, status, liveUrl }) => {
  return (
    <VStack
    align="start"
    spacing={4}
    width="100%"
    borderWidth="0"
    borderColor="transparent"
    borderRadius="lg"
    overflow="hidden"
    pb={4}
    role="group"
    backgroundColor="white"
    transition="all 0.3s ease"
    _hover={{ transform: "scale(1.03)"
  }}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" width="100%"/>
      <Heading color="black" fontSize={{ base: "md", md: "lg" }} px={{ base: 4, md: 4 }} pt={2}> 
        {title}
      </Heading>
      <Text color="grey" fontSize={{ base: "sm", md: "md" }} px={{ base: 4, md: 4 }}>
        {description}
      </Text>

      <HStack spacing={2} px={{ base: 4, md: 4 }} color="black">
        {status === "coming-soon" ? (
          <Text color="gray" fontWeight="medium">
            Work in Progress
          </Text>
        ) : (
          <Box
            as="a"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            gap={2}
          >
            <Text
              display="inline-block"
              fontWeight="medium"
              transition="transform 0.2s ease, color 0.2s ease"
              _groupHover={{
                transform: "scale(1.04)",
                color: "#000",
              }}
            >
              Learn More
            </Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </Box>
        )}
      </HStack>
      </VStack>
  );
};

export default Card;
