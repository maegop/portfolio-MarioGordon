import {
  Container,
  SimpleGrid,
  Image,
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
            About me
            <Image
              alt={"about icon"}
              src={
                "https://affectionate-engelbart-c0321f.netlify.app/images/mem_guino.png"
              }
              display="inline-block"
              boxSize={{ base: "40px", md: "60px" }}
              objectFit="cover"
              arial-label="About me icon"
            />
          </Heading>
          <Text
            color={useColorModeValue("gray.500", "gray.300")}
            fontSize={"lg"}
          >
            I&apos;m Mario Gordon, a Fullstack Software Developer working with
            Python in the Backend and React in the Frontend. I&apos;m living in
            Düren, Germany and looking for a full-time job position.
          </Text>
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
            My working style is highly energetic and motivated to use up-to-date
            tecnologies. I have over 7 years of corporate experience in the
            largest Ecuadorian state telecommunications company, CNT. I have
            worked with Linux servers, Mobile Technologies, and Data Analytics.
            <br /> <br />
            In addition, at Road-Track as Quality Assurance Engineer, where in
            only 3 months I was given the opportunity to work with the R&D team
            in Israel, to be part of a project for an innovative generation
            system for automotive tracking and security.
          </Text>

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
            Education
          </Text>
          <Text
            color={useColorModeValue("gray.500", "gray.300")}
            fontSize={"lg"}
          >
            I studied a Bachelors in Electronics Engineering and a Masters
            degree in Information Technologies. Recently, I have learned web
            development with ReactJS and NextJS.
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
