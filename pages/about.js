import React from "react";
import { Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";
import Container from "../components/Container";

const about = () => {
  return (
    <Container>
      <Heading
        as="h1"
        fontSize={{
          base: "4xl",
          md: "5xl",
        }}
        mb={4}
      >
        About Me
      </Heading>

      {/* I write about development, tech careers, and my personal life on my newsletter. */}
      <Text
        textTransform={"uppercase"}
        color={"teal.400"}
        fontWeight={700}
        fontSize={"md"}
        py={4}
        alignSelf={"flex-start"}
        rounded={"md"}
        //bg={"teal.900"}
        //bg={useColorModeValue("teal.50", "teal.900")}
      >
        Bio
      </Text>

      <Text fontSize={"lg"} alignSelf={"flex-start"}>
        Hey, my name is Mario Gordon. I’m a Electronics Engineer, Software
        Developer, and Data Analyst.
        <br /> <br />I grew up in small-town Ambato and went to school at Quito,
        Ecuador, graduating with a degree in Electronics and Telecommunications
        Engineering. Then I studied a Masters degree in Information
        Technologies, where I developed a text classification model as thesis
        project, to get information about how Twitter bots influence people’s
        opinion.
        <br /> <br />
        Ecuadorian Vice Presidency young professionals program to position best
        graduates from public and private Universities in the most important
        Government companies in Ecuador taking specializations overseas with
        vendors.
      </Text>

      <Text
        textTransform={"uppercase"}
        color={"teal.400"}
        fontWeight={700}
        fontSize={"md"}
        py={4}
        alignSelf={"flex-start"}
        rounded={"md"}
        //bg={"teal.900"}
        //bg={useColorModeValue("teal.50", "teal.900")}
      >
        Interest
      </Text>
      <Text fontSize={"lg"} alignSelf={"flex-start"}>
        I spend my free time cooking, watching videos, learning German and
        enjoying time with my wife. I enjoy being outdoors, exploring nature, it
        gives me the enthusiasm and motivation to improve the world.
      </Text>

      <Text
        textTransform={"uppercase"}
        color={"teal.400"}
        fontWeight={700}
        fontSize={"md"}
        py={4}
        alignSelf={"flex-start"}
        rounded={"md"}
        //bg={"teal.900"}
        //bg={useColorModeValue("teal.50", "teal.900")}
      >
        Work experience
      </Text>
      <Text fontSize={"lg"} alignSelf={"flex-start"}>
        My working style is highly energetic and motivated to use up-to-date
        tecnologies. I have over 7 years of corporate experience in the largest
        Ecuadorian state telecommunications company, CNT. I have worked with
        Linux servers, Mobile Technologies, and Data Analytics.
        <br /> <br />
        In addition, at Road-Track as Quality Assurance Engineer, where in only
        3 months I was given the opportunity to work with the R&D team in
        Israel, to be part of a project for an innovative generation system for
        automotive tracking and security.
      </Text>
    </Container>
  );
};

export default about;
