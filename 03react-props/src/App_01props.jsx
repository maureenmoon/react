import React, { useState } from "react";

function App() {
  const [modal, setModal] = useState("test");
  const [data, setData] = useState(100);

  let [a, b, c] = [1, 2, 7];

  function modalClick() {
    setModal("hi, there");
  }
  function modalClick2() {
    setModal("test");
  }
  return (
    <div>
      <h3>properties demo /{c}</h3>
      <p>Lorem, ipsum dolor.</p>
      {modal}
      <button onClick={modalClick}>click</button>
      <button onClick={modalClick2}>복구</button>
      <ChildComp
        content={modal}
        number={data}
        modalEvent={modalClick}
        modalEvent2={modalClick2}
      />
    </div>
  );
}

function ChildComp(props) {
  return (
    <div style={{ border: "3px solid block" }}>
      childComp
      <p>자료받음 : {props.content}</p>
      <p>value : {props.number}</p>
      <button onClick={props.modalEvent}>자료변경</button>
      <button onClick={props.modalEvent2}>복구</button>
    </div>
  );
}

export default App;
