import "./App.css";
import logo from "./img/Logo-reynald0_sw.png";
import Button from "./components/Button";
import Display from "./components/display";
import "./styles/Display.css";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Please enter the values, to perform the calculations");
    }
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className="Logo-rey-container">
        <img src={logo} className="Logo-rey" alt="Logo de reynald0_sw" />
      </div>
      <div className="calculator-container">
        <Display input={input} />
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>/</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculateResult}>=</Button>
        </div>
        <div className="row">
          <ButtonClear handleClear={()=> setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
