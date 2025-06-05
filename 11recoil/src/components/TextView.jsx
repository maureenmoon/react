import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import testState from "./atom/atoms";
import numView from "./atom/numView";

function TextView() {
  const text = useRecoilValue(testState);
  const [num, setNum] = useRecoilState(numView);
  return;
  <div>
    TextView
    <div>{text}</div>
    <button
      onClick={() => {
        return setNum(num + 1);
      }}
    >
      증가
    </button>
  </div>;
}

export default TextView;
