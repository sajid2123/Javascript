import React, { useState } from "react";
import AddFriendForm from "./addFriendForm";
import Button from "./button";
import FriendsList from "./listFriends";
import SplitBill from "./splitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    url: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    url: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    url: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48/");
  const [showElement, setShowElement] = useState(true);
  const [friends, setFriends] = useState([]);
  const [bill, setBill] = useState(0);
  const [yourBill, setYourBill] = useState(0);
  const [friendBill, setFriendBill] = useState(0);
  const [whoPaying, setWhoPaying] = useState("You");
  const [select, setSelect] = useState(false);

  function handleClickSelect() {
    setSelect(!select);
  }
  function handleSubmitSplitBill(e) {
    e.preventDefault();
  }
  function handleClick() {
    setShowElement(!showElement);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newFriend = {
      id: Date.now(),
      name,
      url,
      message: "You and Sajid are equal",
    };
    addFriend(newFriend);
  }
  function addFriend(friend) {
    setFriends([...friends, friend]);
  }

  return (
    <div>
      {initialFriends.map((friend) => (
        <FriendsList
          url={friend.url}
          name={friend.name}
          key={friend.id}
          balance={0}
          handleClick={handleClickSelect}
        />
      ))}
      {select && (
        <SplitBill
          name={"Sarah"}
          whoPaying={whoPaying}
          setWhoPaying={setWhoPaying}
          bill={bill}
          setBill={setBill}
          yourBill={yourBill}
          setYourBill={setYourBill}
          friendBill={friendBill}
          setFriendBill={setFriendBill}
          handleSubmit={handleSubmitSplitBill}
        />
      )}
      {showElement ? (
        <Button handleClick={handleClick}>Add Friend</Button>
      ) : (
        <div>
          <AddFriendForm
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
            handleSubmit={handleSubmit}
          />
          <Button handleClick={handleClick}>Close</Button>
        </div>
      )}
    </div>
  );
}
