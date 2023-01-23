import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Link, Flex } from "@chakra-ui/react";
const Navbar = () => {
  const NUMBER_EX = 5;

  return (
    <Flex bg="black" p="2" borderBottom="1px solid" justify="space-between">
      {[...Array(NUMBER_EX).keys()].map((number) => (
        <ExLink key={number} number={number + 1} />
      ))}
    </Flex>
  );
};

const ExLink = ({ number }) => {
  return (
    <Link
      color="white"
      p="5"
      fontSize="xl"
      fontWeight="bold"
      as={ReachLink}
      to={`/ex${number}`}
    >
      Exercice {number}
    </Link>
  );
};

export default Navbar;
