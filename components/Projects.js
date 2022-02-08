import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <Box as="section" mt={10} mb={20}>
        <Heading
          letterSpacing="tight"
          mt={8}
          size="lg"
          fontWeight={700}
          as="h2"
          mb={4}
        >
          Featured Projects 👨‍💻
        </Heading>
        <SimpleGrid minChildWidth="300px" spacing="40px">
          <ProjectCard
            title="coffeeclass.io"
            description="coffeeclass.io is a tutorial website I started to teach programming and computer science skills in a fun and easy to learn manner."
            repoHref="https://github.com/carlson-technologies/coffeeclass.io"
            demoHref="https://www.coffeeclass.io?utm_source=website&utm_campaign=benjamincarlson.io"
            languageColor="#2b7489"
            language="TypeScript"
          />
          <ProjectCard
            title="benjamincarlson.io"
            description="This website is a personal website I built to showcase my projects and experience."
            repoHref="https://github.com/bjcarlson42/benjamincarlson.io"
            demoHref="https://benjamincarlson.io"
            languageColor="#f1e05a"
            language="JavaScript"
          />
          <ProjectCard
            title="Word Of The Day App"
            description="A word of the day app built using Google's Flutter - a cross platform mobile app framework. View current and past words and save your favorites!"
            repoHref="https://github.com/bjcarlson42/wotd"
            youtubeId="https://youtu.be/17wMTF_bnnc"
            languageColor="#00B4AB"
            language="Dart"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Projects;
