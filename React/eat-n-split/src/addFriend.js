import React, { useState } from "react";
import "./index.css";

export default function AddFriend() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48/");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex">
        <label>🧍‍♂️🧍‍♀️ Friend name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setUrl("https://i.pravatar.cc/48/" + e.target.value);
          }}
        ></input>
      </div>
      <div className="flex">
        <label>🙀 Image url</label>
        <input type="text" value={url}></input>
      </div>
      <button>Add</button>
    </form>
  );
}
