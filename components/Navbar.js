import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      maxW={"8xl"}
      minWidth="356px"
      width="100%"
      as="nav"
      px={4}
      my={8}
      mx="auto"
    >
      <Box>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname === "/" ? navHoverBg[colorMode] : null
            }
            aria-label="Home"
          >
            Home
          </Button>
        </NextLink>

        <NextLink href="/blog" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname.includes("/blog") ? navHoverBg[colorMode] : null
            }
            aria-label="Blog"
          >
            Blog
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname === "/projects" ? navHoverBg[colorMode] : null
            }
            aria-label="Projects"
          >
            Projects
          </Button>
        </NextLink>
      </Box>
      <DarkModeSwitch />
    </Flex>
  );
};

export default Navbar;
