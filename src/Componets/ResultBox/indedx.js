import react from "react";
import ResultParagraph from "../ResultParagraph";
import "./ResultBox.scss";

export default function ResultBox({ resultText }) {
  return (
    <div className='result-box'>
      <h2 id='yourbmi'>Your BMI is:</h2>
      <h3 id='result'>{resultText}</h3>
      <ResultParagraph />
    </div>
  );
}
