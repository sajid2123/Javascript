import React from "react";

export default function InputBill({ bill, setBill }) {
  return (
    <div className="input">
      <label>How much was your bill? </label>
      <input value={bill} onChange={(e) => setBill(Number(e.target.value))} />
    </div>
  );
}
