import React from "react";

export default function Output({ bill, myTip, myFriendTip }) {
  return (
    <h1 className="output">
      You pay ${bill + (myTip + myFriendTip) / 2}(${bill} + $
      {(myTip + myFriendTip) / 2})
    </h1>
  );
}
