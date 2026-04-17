import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SiVercel } from "react-icons/si";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto:lolitagorkavenko@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Lolita-G",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/lolita-gorkavenko-699a96205/",
  },
  {
    IconComponent: SiVercel,
    url: "https://vercel.com/lolitagorkavenko-8342s-projects",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (headerRef.current) {
      if (currentScrollY > lastScrollY.current) {
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        headerRef.current.style.transform = "translateY(0)";
      }

      lastScrollY.current = currentScrollY;
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 8, lg: 16 }}
          py={{ base: 3, md: 4 }}
          spacing={{ base: 4, md: 8 }}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <nav>
            <HStack spacing={{ base: 4, md: 6 }}>
              {socials.map((social, index) => (
              <Box
                as="a"
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex"
                alignItems="center"
                transition="transform 0.2s ease"
                _hover={{ transform: "scale(1.12)" }}
              >
                {social.IconComponent ? (
                  <Box as={social.IconComponent} boxSize={7} />
                ) : (
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                )}
              </Box>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap" justifyContent={{ base: "flex-start", md: "flex-end" }}>
              <Box
                as="a"
                href="/Gorkavenko_Lebenslauf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                transition="transform 0.2s ease"
                transformOrigin="center"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ transform: "scale(1.08)" }}
              >
                CV
              </Box>
              <Box
                as="a"
                href="#projects-section"
                onClick={handleClick("projects")}
                transition="transform 0.2s ease"
                transformOrigin="center"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ transform: "scale(1.08)" }}
              >
                Projects
              </Box>
              <Box
                as="a"
                href="#contactme-section"
                onClick={handleClick("contactme")}
                transition="transform 0.2s ease"
                transformOrigin="center"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ transform: "scale(1.08)" }}
              >
                Contact Me
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
