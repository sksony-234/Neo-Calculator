import React, {useState} from 'react'
import './style.css'
import Backdots from './Backdots';
const Calculator = () => {

  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '%', '*', '+', '-', '.'];

  const updateCalc = (value) =>{
    if (ops.includes(value) && output === "") {
      return setOutput("0" + value);
    }
    if (ops.includes(value) && ops.includes(output.slice(-1))) {
      return;
    }
    setOutput(output + value);
    if(!ops.includes(value)){
      setResult(eval(output + value).toString());
    }
  }

  const calculate = ()=>{
    setOutput(eval(output).toString());
  }

  const deletlast = ()=>{
    if (output) {
      const value = output.slice(0, -1);
      setOutput(value);
    }
  }
  const deleteAll = ()=>{
    setOutput("");
    setResult("")
  }
  return (
    <div>
      <div className="container">
        <div className="cal-container">
          <div className="display">
            <div className="up">{output || "0"}</div>
            <div className="down">{result ? <div>{result}</div> : ""}</div>
          </div>
          <div className="button-box">
            <div className="line"></div>
            <div className="cal">
              <button className="type1" onClick={deleteAll}>
                C
              </button>
              <button className="type1" onClick={deletlast}>
                Del
              </button>
              <button className="type1" onClick={() => updateCalc("%")}>
                %
              </button>
              <button className="type2" onClick={() => updateCalc("/")}>
                /
              </button>
              <button onClick={() => updateCalc("7")}>7</button>
              <button onClick={() => updateCalc("8")}>8</button>
              <button onClick={() => updateCalc("9")}>9</button>
              <button className="type2" onClick={() => updateCalc("*")}>
                *
              </button>
              <button onClick={() => updateCalc("4")}>4</button>
              <button onClick={() => updateCalc("5")}>5</button>
              <button onClick={() => updateCalc("6")}>6</button>
              <button className="type2" onClick={() => updateCalc("-")}>
                -
              </button>
              <button onClick={() => updateCalc("1")}>1</button>
              <button onClick={() => updateCalc("2")}>2</button>
              <button onClick={() => updateCalc("3")}>3</button>
              <button className="type2" onClick={() => updateCalc("+")}>
                +
              </button>
              <button className="zero" onClick={() => updateCalc("0")}>
                0
              </button>
              <button onClick={() => updateCalc(".")}>.</button>
              <button className="eqaute" onClick={calculate}>
                =
              </button>
            </div>
          </div>
          <div className="backdots1">
            <Backdots />
          </div>
          <div className="backdots2">
            <Backdots />
          </div>
        </div>

        <div className="sq1"></div>
        <div className="sq2"></div>
        <div className="cr1"></div>
        <div className="cr2"></div>
      </div>
    </div>
  );
}

export default Calculator