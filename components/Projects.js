import React from "react";
import ProjectCard from "../components/ProjectCard";
import {
  Heading,
  Text,
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
          letterSpacing="tight"
          mt={8}
          size="lg"
          fontWeight={700}
          as="h2"
          mb={4}
        >
          My Projects 👨‍💻
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
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Projects;
