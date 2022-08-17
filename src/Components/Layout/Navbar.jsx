import { RiMovie2Line } from "react-icons/ri";
import { BiMoon } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
import React from "react";
import { HStack, Text, Heading, useColorMode, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ModalAuth from "../Auth/ModalAuth";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      color="white"
      bg="#4a4e69"
      p="10px"
      h="100px"
    >
      <Heading ml="10px">
        <NavLink to="/">
          <RiMovie2Line />
          Movies App
        </NavLink>
      </Heading>

      <HStack>
        <NavLink to="/">Home</NavLink>
        <Text>|</Text>
        <ModalAuth />
        <Button color="black" onClick={toggleColorMode}>
          {colorMode === "light" ? <BiMoon /> : <BsSunFill />}
        </Button>
      </HStack>
    </HStack>
  );
};
