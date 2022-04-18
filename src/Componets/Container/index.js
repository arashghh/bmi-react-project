import react from "react";
import Header from "../Header";
import Main from "../Main";
import "./Container.scss";

export default function Container() {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  );
}
