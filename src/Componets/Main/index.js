import React, { useState } from "react";
import InputBox from "../InputBox";
import "./Main.scss";
import ResultBox from "../ResultBox/indedx";

export default function Main() {
  const [result, setResult] = useState("");
  const [bmi, setBmi] = useState();

  const handleSetResult = (resultText, bmi) => {
    setResult(resultText);
    setBmi(bmi);
  };

  return (
    <div className='main'>
      <InputBox setResultText={handleSetResult} />
      <ResultBox resultText={result} bmi={bmi} name={"arash"} />
    </div>
  );
}
