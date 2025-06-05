import React, { useState } from "react";
import ModalComp from "./components/ModalComp";
import "./App.css";

function App() {
  const vData = [
    "1.Lorem ipsum dolor sit amet",
    "2.consectetur adipisicing elit. Libero",
    "3.dolores! Cumque sapiente obcaecati",
  ];
  const [state, setState] = useState(0);
  // useS입력하고 useState찾아서 선택해야 import됨

  return (
    <div>
      <h3>modal</h3>
      <ul className="tab">
        <li
          onClick={() => {
            setState(0);
          }}
        >
          tab1
        </li>
        <li
          onClick={() => {
            setState(1);
          }}
        >
          tab2
        </li>
        <li
          onClick={() => {
            setState(2);
          }}
        >
          tab3
        </li>
      </ul>

      <ModalComp vData={vData} cState={state} />
    </div>
  );
}

export default App;
