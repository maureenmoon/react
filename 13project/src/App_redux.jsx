import { createStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

//redux 상태관리 구조를  react앱에 연동해서 카운트 증가나 로그인 같은 전역 상태를 처리
//상태(email, nickname, value)를 전역으로 관리
//사용자의 인터랙션(버튼 클릭)으로 이 상태를 바꿀 수 있어야함
//1. 전역  store 생성 : creatStore(reducer)
//2. action 정의
//3. store를 앱에 연결 :  Provider
//4. state값 호출 : useSelector
//5. state 변경명령(action) 보내기 : useDispatch

//다른 화일로 만들어 관리
const init = {
  value: 0,
  email: "",
  nickname: "",
};

//2. action(reducer) : state(상태)를 어떻게 바꿀지 정의
// const reducer = (state, action) => {
const reducer = (state = init, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        value: state.value + action.payload,
      }; // 여러 데이터일때 ...사용
    case "login":
      return {
        ...state,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    default:
      return state;
  }
};

//1. state 상태 변경을 위한 전역 store 생성
//다른 화일로 만들어 관리
// const store = createStore(reducer, init);
const store = createStore(reducer);

//3. store를 앱에 연결 :  Provider
//다른 화일로 만들어 관리
function App() {
  return (
    <Provider store={store}>
      {" "}
      #store를 react에 연결하는 컴포넌트
      <div className="border-1 p-3">
        App
        <div className="flex gap-3"></div>
        <CounterComp />
      </div>
    </Provider>
  );
}

function CounterComp() {
  const count = useSelector((state) => {
    //useSelector : store의 값을 가져옴
    return state.value;
  });

  const email = useSelector((state) => {
    return state.email;
  });
  return (
    <>
      <div className="border-1 p-3">
        testCounterComp{email} /{count}
        <CounterChildComp />
      </div>
    </>
  );
}

function CounterChildComp() {
  const email = useSelector((state) => {
    return state.email;
  });
  const num = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch(); //store에 action을 전달

  return (
    <>
      {/* <h2>testCounterComp</h2> */}
      <div className="border-2 p-3">
        counterChildComp
        <p>
          {email}/{num}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "add", payload: 1 });
          }}
        >
          add
        </button>
        <div
          className="btn btn=success"
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
          add2
        </div>
      </div>
    </>
  );
}

export default App;
