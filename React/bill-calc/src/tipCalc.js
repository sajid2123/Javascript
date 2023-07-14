import React from "react";

export default function TipCalc({ children, service, setService }) {
  return (
    <div className="tip">
      <label>{children} </label>
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option>Dissatisfied(0%)</option>
        <option>it was okay(5%)</option>
        <option>it was good(10%)</option>
        <option>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
