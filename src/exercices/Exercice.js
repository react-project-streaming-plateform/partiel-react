import React from 'react'
import { Flex, Text, Box} from '@chakra-ui/react';


const Exercice = ({number, consigne, children}) => {
  return (
    <Flex direction="column" align="center" p="2">
      <Text p="2" fontSize="3xl">Exercice {number}</Text>
      <Text p="2" fontSize="lg">{consigne}</Text>
      <Box pt="10">
        {children}
        </Box>
    </Flex>
  );
}

export default Exercice