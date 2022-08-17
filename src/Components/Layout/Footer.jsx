import React from "react";
import { HStack, Link, Text, Heading, Box, Center } from "@chakra-ui/react";
import { RiMovie2Line } from "react-icons/ri";

export const Footer = () => {
  return (
    <HStack
      justifyContent="center"
      color="white"
      bg="#4a4e69"
      p="30px"
      h="20px"
    >
      <Box display="flex">
        <Center>
          <Text>
            <Link to="/">
              <RiMovie2Line /> Movies App
            </Link>
          </Text>
        </Center>
      </Box>
    </HStack>
  );
};
