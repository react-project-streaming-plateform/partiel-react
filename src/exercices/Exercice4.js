import React, { useState } from "react";
import Exercice from "./Exercice";
import { Input, Button, Text, Flex } from "@chakra-ui/react";

const consigne =
  "Dans le fichier src/Exercices/Exercice4.js Complétez la fonction factorielle pour qu’elle renvoie la factorielle du nombre n. (ex n =3, factorielle de n = 3 * 2 * 1 = 6) Vous ne devez toucher à rien d’autre dans le fichier, vérifiez que la fonction marche dans l’exercice 4 sur votre application React";

function Exercice4() {
  const [value, setValue] = useState("");
  const [facto, setFacto] = useState("");

  function factorielle(n) {
    if (n <= 1) {
      return 1
    }
    let fact = n * factorielle(n-1)
    return fact;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFacto(factorielle(value));
  }

  return (
    <Exercice number="4" consigne={consigne}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" align="center">
          <Input
            value={value}
            onChange={(e) => {
              setFacto("");
              setValue(e.target.value);
            }}
            placeholder="Entrez un chiffre"
          />
          <Button m="3" type="submit">
            Tester ma fonction factorielle
          </Button>
        </Flex>
      </form>
      {facto && (
        <Text fontSize="xl">
          La factorielle de {value} est {facto}{" "}
        </Text>
      )}
    </Exercice>
  );
}

export default Exercice4;
