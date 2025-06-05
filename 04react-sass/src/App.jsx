import React, { useState } from "react";
import "./assets/vdata.scss";
import myData from "./assets/data01";
import TourComp from "./components/TourComp";

function App() {
  const [num, setNum] = useState(0);
  const [view, setView] = useState(false);

  function vTour(index) {
    setView(true);
    setNum(index);
  }
  function TourClose() {
    setView(false);
  }

  return (
    <>
      <h3>mytour</h3>
      <ul className="lists">
        {myData.map((item, i) => {
          return (
            <>
              <li
                className="img-name"
                onClick={() => {
                  vTour(i);
                }}
              >
                {item.firstimage != "" ? (
                  <>
                    <img src={item.firstimage} />
                  </>
                ) : null}
                <div>{item.title}</div>
              </li>
            </>
          );
        })}
      </ul>
      {view ? (
        <TourComp closeEvent={TourClose} sendVData={myData} sendNum={num} />
      ) : null}
    </>
  );
}

export default App;
