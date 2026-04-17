import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "React restaurant booking app with availability tracking, built with React Hooks and form validation, smooth user flows and intuitive interface",
    getImageSrc: () => require("../images/Chefs1.jpg"),
    status: "done",
    liveUrl: "https://little-lemon-restaurant-xi.vercel.app/",
  },
  {
    title: "React Infinite Scroll",
    description:
      "Real-time stock market dashboard with interactive charts and live data streaming, built with React Hooks and modular architecture",
    getImageSrc: () => require("../images/Stock.png"),
    status: "coming-soon",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#324E59"
      isDarkBackground
      p={{ base: 6, md: 8 }}
      alignItems="flex-start"
      spacing={8}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))" }}
        gridGap={{ base: 6, md: 8 }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            status={project.status}
            liveUrl={project.liveUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
