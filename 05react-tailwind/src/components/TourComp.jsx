import React from "react";

function TourComp({ sendVData, sendNum }) {
  return (
    <>
      <div className="tour">
        <div className="tourContent">
          <p className="mapx">{sendVData[sendNum].mapx}</p>
          <p className="mapy">{sendVData[sendNum].mapy}</p>
        </div>
      </div>
    </>
  );
}

export default TourComp;
