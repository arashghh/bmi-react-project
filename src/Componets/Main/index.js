import React, { useState } from "react";
import InputBox from "../InputBox";
import "./Main.scss";
import ResultBox from "../ResultBox/indedx";

export default function Main() {
  const [result, setResult] = useState("");

  const handleSetResult = (resultText) => {
    setResult(resultText);
  };

  return (
    <div className='main'>
      <InputBox setResultText={handleSetResult} />
      <ResultBox resultText={result} />
    </div>
  );
}
