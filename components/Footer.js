import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© Made with 🔥 by Mario Gordon.</Text>

          <Stack direction={"row"} spacing={7}>
            <Tooltip label={"Share my work"} closeOnClick={false} hasArrow>
              <Link
                href={
                  "https://twitter.com/intent/tweet?text=Check%20out%20a%20Software%20Developer%20Portfolio%20built%20by%20@Mario_Gordon%20https://mariogordon.netlify.app"
                }
                isexternal="true"
              >
                <FaTwitter />
              </Link>
            </Tooltip>

            <Link
              href={"https://twitter.com/Mario_Gordon"}
              passhref="true"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>

            <Tooltip label={"Share my work"} closeOnClick={false} hasArrow>
              <Link
                href={
                  "https://www.linkedin.com/shareArticle?mini=true&url=https://mariogordon.netlify.app"
                }
                isexternal="true"
              >
                <FaLinkedin />
              </Link>
            </Tooltip>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
