import {
  Container,
  SimpleGrid,
  Img,
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
    <Container
      maxW={"8xl"}
      py={14}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mb={{ base: 2, md: 5 }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Img
            rounded={"md"}
            alt={"about me image"}
            loading={"lazy"}
            src={
              "https://affectionate-engelbart-c0321f.netlify.app/images/profile.jpg"
            }
            objectFit={"cover"}
            layout="fill"
          />
        </Flex>
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

          <Text
            color={useColorModeValue("gray.500", "gray.300")}
            fontSize={"lg"}
          >
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
      </SimpleGrid>
    </Container>
  );
}
