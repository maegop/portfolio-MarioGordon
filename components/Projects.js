import React from "react";
import ProjectCard from "../components/ProjectCard";
import {
  Heading,
  Text,
  Img,
  Box,
  SimpleGrid,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container
      maxW={"8xl"}
      py={14}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mb={{ base: 2, md: 5 }}
    >
      <Box as="section" mt={10} mb={20}>
        <Heading
          letterSpacing="normal"
          mt={8}
          size="lg"
          fontWeight={700}
          as="h2"
          mb={4}
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
        >
          My Projects{" "}
          <Img
            alt={"about icon"}
            display="inline-block"
            src={
              "https://res.cloudinary.com/dxjaruq2p/image/upload/v1647360171/protfolio/mem_computer_vdrx7i.png"
            }
            boxSize={{ base: "40px", md: "70px" }}
            objectFit="cover"
            arial-label="Projects icon"
            ml={4}
          />
        </Heading>
        <SimpleGrid minChildWidth="300px" spacing="40px">
          <ProjectCard
            title="Crypto Welt"
            description="A website with cryptocurrencies information and News fetch from APIs"
            repoHref="https://github.com/maegop/CriptoWelt"
            demoHref="https://cryptowelt.netlify.app/"
            languageColor="#805AD5"
            language="Javascript | React"
          />
          <ProjectCard
            title="My Portfolio Website"
            description="My personal website I built to showcase my projects and experience. It was built with NextJS and ChakraUI"
            repoHref="https://github.com/maegop/portfolio-MarioGordon"
            demoHref="https://mariogordon.netlify.app/"
            languageColor="#f1e05a"
            language="JavaScript | NextJS"
          />
          <ProjectCard
            title="Branding Website"
            description="A SPA website designed for personal branding to show projects and skills. Library used for animations FramerMotion"
            repoHref="https://github.com/maegop/Personal-Portfolio-Website"
            demoHref="https://github.com/maegop/Personal-Portfolio-Website"
            languageColor="#f1e05a"
            language="JavaScript | ReactJS"
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Projects;
