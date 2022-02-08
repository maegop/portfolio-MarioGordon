import Container from "../components/Container";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const url = "https://example.io/";
const title = "Mario Gordon | Software Developer Portfolio";
const description = "Awesome description.";

export default function Home() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />

      <Container>
        <Hero />
        <AboutMe />
        <Projects />
      </Container>

      <ContactMe />
      <Footer />
    </>
  );
}
