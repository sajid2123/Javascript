import React from "react";
import Button from "./button";

export default function FriendsList({ url, name, balance, handleClick, who }) {
  return (
    <div>
      <img src={url} />
      <h1>{name}</h1>
      {balance === 0 ? (
        <p>{`You and ${name} are even`}</p>
      ) : who === "You" ? (
        <p>{`${name} owns you ${balance}€`}</p>
      ) : (
        <p>{`You own ${name} ${balance}€`}</p>
      )}
      <Button handleClick={handleClick}>Select</Button>
    </div>
  );
}
