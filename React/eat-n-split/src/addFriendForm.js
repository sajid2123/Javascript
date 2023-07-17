import React, { useState } from "react";
import "./index.css";

export default function AddFriendForm({
  name,
  url,
  setName,
  setUrl,
  handleSubmit,
}) {
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
        <input readOnly type="text" value={url}></input>
      </div>
      <button>Add</button>
    </form>
  );
}
