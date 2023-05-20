import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [num, setNum] = useState("");
  const [setAns] = useState("");

  const symb = ["/", "*", "+", ".", "-"];

  const numHandler = (value) => {
    if (
      (symb.includes(value) && num === "") ||
      (symb.includes(value) && symb.includes(symb.slice(-1)))
    ) {
      return;
    }

    setNum(num + value);

    if (!symb.includes(value)) {
      setAns(eval(num + value).toString());
    }
  };
  const equals = () => {
    setNum(eval(num).toString());
  };

  const del = () => {
    if (num === "") {
      return;
    }
    const value = num.slice(0, -1);

    setNum(value);
  };

  return (
    <marquee behavior="slide" direction="up" scrollamount="24">
      <div className="calculator">
        <div className="cal">
          <div className="display">
            <span>{num || "0"}</span>
          </div>
          <div className="row">
            <button onClick={del} className="btn del">
              Del
            </button>
            <div className="row-1">
              <button onClick={() => numHandler("7")} className="btn">
                7
              </button>
              <button onClick={() => numHandler("8")} className="btn">
                8
              </button>
              <button onClick={() => numHandler("9")} className="btn">
                9
              </button>
              <button onClick={() => numHandler("/")} className="btn">
                /
              </button>
            </div>
            <div className="row-2">
              <button onClick={() => numHandler("4")} className="btn">
                4
              </button>
              <button onClick={() => numHandler("5")} className="btn">
                5
              </button>
              <button onClick={() => numHandler("6")} className="btn">
                6
              </button>
              <button onClick={() => numHandler("*")} className="btn">
                x
              </button>
            </div>
            <div className="row-3">
              <button onClick={() => numHandler("1")} className="btn">
                1
              </button>
              <button onClick={() => numHandler("2")} className="btn">
                2
              </button>
              <button onClick={() => numHandler("3")} className="btn">
                3
              </button>
              <button onClick={() => numHandler("+")} className="btn">
                +
              </button>
            </div>
            <div className="row-4">
              <button onClick={() => numHandler("0")} className="btn">
                0
              </button>
              <button onClick={() => numHandler(".")} className="btn">
                .
              </button>
              <button onClick={equals} className="btn">
                =
              </button>
              <button onClick={() => numHandler("-")} className="btn">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </marquee>
  );
};

export default Calculator;
