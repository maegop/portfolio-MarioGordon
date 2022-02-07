import Container from "../components/Container";
import { Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <Heading as="h1" size="3xl">
          Hello, I am Mario Gordon
        </Heading>
        <Text fontSize="2xl" my={4}>
          A software developer and Electronics Engineer .
        </Text>
        <Button colorScheme="cyan" size="lg">
          About Me
        </Button>
      </Container>
    </>
  );
}
