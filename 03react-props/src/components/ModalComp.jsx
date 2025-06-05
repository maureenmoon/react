import React from "react";

function ModalComp({ vData, cState }) {
  return <div className="content">{vData[cState]}</div>;
}

export default ModalComp;
