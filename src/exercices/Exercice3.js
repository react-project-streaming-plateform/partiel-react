import React, { useState } from "react";
import Exercice from "./Exercice";

const consigne =
  "Dans le fichier src/Exercices/Exercice3.js Créez un formulaire contenant un input et un bouton submit. Lorsqu’on envoie un text il doit être sauvegardé dans notre localStorage et sera affiché en dessous du formulaire";

function Exercice3() {
  const [val, setVal] = useState("");
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  function handleClick() {
    const tmpMessages = [...messages, val];
    localStorage.setItem("messages", JSON.stringify(tmpMessages));
    setMessages(tmpMessages);
    setVal("");
  }

  return (
    <Exercice number="3" consigne={consigne}>
      <input
        style={{ borderWidth: "2px" }}
        type="text"
        value={val}
        placeholder="Ecrivez votre texte"
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button
        style={{ borderWidth: "2px" }}
        type="submit"
        value="Submit"
        onClick={handleClick}
      >
        Envoyer
      </button>
      {messages &&
        messages.map((message, index) => {
          return (
            <div key={index}>
              <p>{message}</p>
            </div>
          );
        })}
    </Exercice>
  );
}

export default Exercice3;
