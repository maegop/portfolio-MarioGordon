import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Container maxW={"8xl"} py={14}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>About me</Heading>
          <Text
            textTransform={"uppercase"}
            color={"teal.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("teal.50", "teal.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Experience
          </Text>

          <Text color={"gray.500"} fontSize={"lg"}>
            Web developer with knowledge in Fronted technologies, working with
            Linux servers, Cloud Computing, and Data Analytics. I am from
            Ecuador, but I live in Düren, Germany. I am passionate about
            technology and software development.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"about me image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
