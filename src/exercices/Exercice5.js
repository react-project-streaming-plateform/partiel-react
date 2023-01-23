import React from "react";
import Exercice from "./Exercice";
import { Text, Flex } from "@chakra-ui/react";

const consigne =
  "Dans le fichier src/Exercices/Exercice5.js Complétez la fonction tri pour qu’elle renvoie la liste reçue d’entier triée dans l’ordre croissant Vous ne devez toucher à rien d’autre dans le fichier, vérifiez que la fonction marche dans l’exercice 5 sur votre application React, elle sera updaté à chaque sauvegarde ⚠️Attention intediction d’utiliser array.sort();";

function Exercice5() {
  const listInitial = [1, 2, 7, 5, 3, 4, 8, 10, 0];

  function tri(list) {
    for (let i = 0; i < list.length; i++) {
      let min = i;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] < list[min]) {
          min = j;
        }
      }
      let tmp = list[i];
      list[i] = list[min];
      list[min] = tmp;
    }
    return list;
  }

  return (
    <Exercice number="5" consigne={consigne}>
      <Flex direction="column" align="center">
        Voici ma liste triée :
        {tri(listInitial).map((n) => (
          <Text key={n}>{n}</Text>
        ))}
      </Flex>
    </Exercice>
  );
}

export default Exercice5;
