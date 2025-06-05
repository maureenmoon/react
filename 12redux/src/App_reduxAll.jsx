import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initState = {
  value: 0,
  title: "hi world",
};
function reducer(state = initState, action) {
  console.log("=========" + state.value, state.title, action.type);
  if (action.type == "up") {
    return {
      ...state,
      value: state.value + action.payload,
    }; //...state: original data, value:state.value:
  }
  if (action.type == "down") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  }

  return state;
}

//store
const store = createStore(reducer); // reducer 넣어줘야함. atom
//App
function App() {
  return (
    <Provider store={store}>
      {/* provider: redux 사용하기 위해. store지정 */}
      <div style={{ boarder: "1px solid #f00", padding: "10px" }}>
        <div>App</div>
        <Counter />
      </div>
    </Provider>
  );
}

//component제작
function Counter() {
  return (
    <>
      <div style={{ boarder: "1px solid #f00", padding: "10px" }}>
        <div>myCount</div>
        <MyCounter />
      </div>
    </>
  );
}

function MyCounter() {
  // const value = useSelector((state) => {
  //   return state.value;
  // });
  // const title = useSelector((state) => state.title)
  // const { value, title } = useSelector((state) => {
  //   return {
  //     value: state.value,
  //     title: state.title,
  //   };
  // });
  const { value, title } = useSelector((state) => ({
    value: state.value,
    title: state.title,
  }));

  const dispatch = useDispatch();

  return (
    <>
      <div style={{ border: "1px solid #f00", padding: "10px" }}>
        {value}/{title}
        <button
          onClick={() => {
            dispatch({ type: "up", payload: 1 });
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            dispatch({ type: "up", payload: 10 });
          }}
        >
          증가10
        </button>
        <button
          onClick={() => {
            dispatch({ type: "down", payload: 1 });
          }}
        >
          감소
        </button>
      </div>
    </>
  );
}

export default App;
