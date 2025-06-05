import React, { useState } from "react";
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
      <ul className="lists flex flex-row flex-wrap sm:flex-row gap-3 ">
        {myData.map((item, i) => {
          return (
            <>
              <div className="img-trim flex flex-row flex-wrap sm:flex-row  width-100% height-[250px] position:relative overflow:hidden">
                <li
                  className="img-name flex-1 min-w-[45%] sm:min-w-[23%] position:absolute"
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
              </div>
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
