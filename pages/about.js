import { Button, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Button
        colorScheme="teal"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        Hover me
      </Button>

      <Box role="group">
        <Box
          _hover={{ fontWeight: "semibold" }}
          _groupHover={{ color: "tomato" }}
        ></Box>
      </Box>

      <Box _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}>
        A pseudo element
      </Box>
    </Box>
  );
};

export default About;
