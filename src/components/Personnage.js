import React from "react";

function Personnage({name, lastname}) {
  return (
    <div>
      <p>{name}</p>
      <p>{lastname}</p>
      <br />
    </div>
  );
}

export default Personnage;
