import react from "react";
import ResultParagraph from "../ResultParagraph";
import "./ResultBox.scss";

export default function ResultBox({ resultText, bmi, name }) {
  return (
    <div className='result-box'>
      <h2 id='yourbmi'>{bmi}</h2>
      <h3 id='result'>{resultText}</h3>
      <ResultParagraph />
    </div>
  );
}
