import React from "react";

export default function Reset({ setBill, setMyService, setFriendService }) {
  function handleClick() {
    setBill(0);
    setMyService("Dissatisfied(0%)");
    setFriendService("Dissatisfied(0%)");
  }
  return <button className="reset" onClick={() => handleClick()}>Reset</button>;
}
