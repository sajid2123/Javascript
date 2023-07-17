import React, { useState } from "react";

export default function SplitBill({
  name,
  whoPaying,
  setWhoPaying,
  bill,
  setBill,
  yourBill,
  setYourBill,
  friendBill,
  setFriendBill,
  handleSubmit,
}) {
  return (
    <div>
      <h1>{`Split bill with ${name}`}</h1>
      <form onSubmit={handleSubmit}>
        <label>Bill Value</label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>
        <label>Your Expense</label>¡
        <input
          value={yourBill}
          onChange={(e) => setYourBill(Number(e.target.value))}
        ></input>
        <label>{`${name}'s expense`}</label>
        <input
          value={friendBill}
          onChange={(e) => setFriendBill(Number(e.target.value))}
        ></input>
        <label>Who is paying the bill</label>
        <select
          value={whoPaying}
          onChange={(e) => setWhoPaying(e.target.value)}
        >
          <option value={"You"}>You</option>
          <option value={name}>{`${name}`}</option>
        </select>
        <button>Split Bill</button>
      </form>
    </div>
  );
}
