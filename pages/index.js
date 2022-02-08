import Container from "../components/Container";
import { Heading, Text, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import About from "../components/About";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";

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
        <About />
      </Container>
      <Contactme />
      <Footer />
    </>
  );
}
