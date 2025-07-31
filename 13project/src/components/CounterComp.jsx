import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterComp() {
  const num = useSelector((state) => {
    return state.value;
  });
  const email = useSelector((state) => {
    return state.email;
  });

  const dispatch = useDispatch();
  return (
    <div className="border-1 p-3">
      counterComp
      <p>{email} /</p>
      <div>
        <div
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "add",
              payload: 1,
            });
          }}
        >
          add
        </div>
        {/* <div
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "login",
              payload: {
                email: "maureen@naver.com",
                nickname: "mau",
              },
            });
          }}
        >
          login
        </div> */}
      </div>
    </div>
  );
}

export default CounterComp;
// const num = useSelector((state) => state.value);
