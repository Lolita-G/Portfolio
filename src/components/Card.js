import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
    align="start"
    spacing={4}
    borderWidth="0"
    borderColor="transparent"
    borderRadius="lg"
    overflow="hidden"
    pb={4}
    backgroundColor="white"
    
    
    
    >
      <Image src={imageSrc} alt={title} borderRadius="md" width="100%"/>
      <Heading  color="black" fontSize="lg" px={4} pt={2}> 
        {title}
      </Heading>
      <Text color="grey" fontSize="md" px={4}>
        {description}
      </Text>

      
      <HStack spacing={2} px={4} color="black">
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
      </VStack>
    

  );
};

export default Card;

