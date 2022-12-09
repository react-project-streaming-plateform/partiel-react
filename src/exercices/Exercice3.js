import React from 'react'
import Exercice from './Exercice';

const consigne = "Dans le fichier src/Exercices/Exercice3.js Créez un formulaire contenant un input et un bouton submit. Lorsqu’on envoie un text il doit être sauvegardé dans notre localStorage et sera affiché en dessous du formulaire"

function Exercice3() {
  return (
    <Exercice number="3" consigne={consigne}>
      {/* Ecrivez votre code ici */}
    </Exercice>
  );
}

export default Exercice3