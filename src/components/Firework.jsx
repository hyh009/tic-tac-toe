import React from "react";
import "../styles/firework.css";
const Firework = ({ n, size }) => {
  return (
    <div
      className={`firework location${n}`}
      style={{ transform: `scale(${size})` }}
    >
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
      <div className="explosion"></div>
    </div>
  );
};

export default Firework;
