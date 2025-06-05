import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import testState from "./atom/atoms";
import numView from "./atom/numView";

function TextInput() {
  const [text, setText] = useRecoilState(testState);

  const numV = useRecoilValue(numView);
  return (
    <div>
      TextInput
      <input
        type="text"
        value={text}
        onChange={(e) => {
          return setText(e.target.value);
        }}
        placeholder="입력하세요"
        className="bg-gray-50 border-1 p-2"
      />
      <div>{numV}</div>
    </div>
  );
}

export default TextInput;
