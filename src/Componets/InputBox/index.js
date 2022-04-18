import react, { useState } from "react";

import "./InputBox.scss";

export default function InputBox({ setResultText }) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState("");

  const onClickSubmit = (e) => {
    console.log(height);
    console.log(weight);
    const result = weight / (height * height);
    const bmi = result * 10000;

    var resultText = "";

    if (bmi < 18.4) {
      resultText = "You are Underweight!";
    } else if (18.5 < bmi && bmi < 24.5) {
      resultText = "You are Normal!";
    } else if (24.6 < bmi && bmi < 29.9) {
      resultText = "You are Overweight!";
    } else {
      resultText = "You are Obesity!!!";
    }

    console.log(resultText);
    setResultText(resultText);
  };

  const onChangeInputs = (e) => {
    console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    if (name === "weight") {
      setWeight(value);
    }
    if (name === "height") {
      setHeight(value);
    }
  };

  return (
    <div className='input-box'>
      <div className='inputs'>
        <label htmlFor='height'>Height(cm):</label>
        <input
          id='height'
          type='number'
          name='height'
          className='input-design'
          title='CM'
          onChange={onChangeInputs}
          value={height}
        />
      </div>
      <div className='inputs'>
        <label htmlFor='weight'>Weight(kg):</label>
        <input
          id='weight'
          type='number'
          name='weight'
          className='input-design'
          title='KG'
          onChange={onChangeInputs}
          value={weight}
        />
      </div>
      <button
        type='submit'
        className='submit'
        onClick={(e) => onClickSubmit(e)}
      >
        Calculate
      </button>
    </div>
  );
}
