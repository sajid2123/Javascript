import React, { useState } from "react";
import InputBill from "./inputBill";
import TipCalc from "./tipCalc";
import Output from "./output";
import Reset from "./reset";
import "./index.css";
export default function App() {
  const [bill, setBill] = useState("");
  const [myService, setMyService] = useState("Dissatisfied(0%)");
  const [friendService, setFriendService] = useState("Dissatisfied(0%)");

  function tipCalculator(e) {
    if (e === "it was okay(5%)") {
      return bill * 0.05;
    } else if (e === "it was good(10%)") {
      return bill * 0.1;
    } else if (e === "Absolutely amazing!(20%)") {
      return bill * 0.2;
    } else {
      return 0;
    }
  }
  console.log("remaster");
  return (
    <div className="app">
      <div className="main">
        <InputBill bill={bill} setBill={setBill} />
        <TipCalc service={myService} setService={setMyService}>
          How did you like the Service?
        </TipCalc>
        <TipCalc service={friendService} setService={setFriendService}>
          How did your friend like the Service?
        </TipCalc>
        <Output
          bill={bill}
          myTip={tipCalculator(myService)}
          myFriendTip={tipCalculator(friendService)}
        />
        <Reset
          setBill={setBill}
          setMyService={setMyService}
          setFriendService={setFriendService}
        />
      </div>
    </div>
  );
}
