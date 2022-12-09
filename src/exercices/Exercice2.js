import React from 'react'
import Exercice from './Exercice';
import Personnage from '../components/Personnage';

const consigne = "Dans le fichier src/Exercices/Exercice2.js Utiliser la fonction .map pour afficher la liste des personnages présents dans la listPerso, retournez à chaque fois le component <Personnage /> en lui passant les props nécessaires (vous devez aussi compléter le fichier src/components/Personnage)"

function Exercice2() {
  const listPerso = [{name: "John", lastname: "Smith"}, {name: "Marc", lastname: "Test"}, {name: "Chloe", lastname:"NomDeFamille"}]

  return (
    <Exercice number="2" consigne={consigne}>
      {/* Ecrivez votre code ici */}
      <Personnage/>
    </Exercice>
  );
}

export default Exercice2