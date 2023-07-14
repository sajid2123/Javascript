import React, { useState } from "react";

export default function friend({ name }) {
  return (
    <div>
      <img src={`https://i.pravatar.cc/48/${name}`} alt="Friend" />
      <h1>{name}</h1>
      <p>You and {name} are even</p>
      <button>Select</button>
    </div>
  );
}
