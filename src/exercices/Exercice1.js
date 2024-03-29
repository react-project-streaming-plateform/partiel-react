import React, { useState } from "react";
import Exercice from "./Exercice";
import { Button, Flex } from "@chakra-ui/react";

const consigne =
  "Dans le fichier src/Exercices/Exercice1.js Importez et utilisez useState de manière à ce que le compteur augmente lorsque vous cliquez sur le bouton lors du passage dans fonction handleClick";

function Exercice1() {
  const [val, setVal] = useState(0);

  function handleClick() {
    setVal(val +1);
  }

  return (
    <Exercice number="1" consigne={consigne}>
      <Flex direction="column" align="center">
        <div>Compteur : {val}</div>
        <Button onClick={handleClick}>
          Cliquez ici pour augmenter le compteur
        </Button>
      </Flex>
    </Exercice>
  );
}

export default Exercice1;
