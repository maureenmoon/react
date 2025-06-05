import React from "react";

function ModalComp({ closeEvent, sendVData, sendNum }) {
  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <div className="titleWrap">
            <h3>{sendVData[sendNum].title}</h3>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <p>{sendVData[sendNum].content}</p>
          <button onClick={closeEvent}>닫기</button>
        </div>
      </div>
    </>
  );
}

export default ModalComp;
