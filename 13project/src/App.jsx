import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

//1.configureStore : 여러개의 reducer가능
//2.countSlice

//reducer 대신 객체(여러개로 쪼갬: slice) 사용
const countSlice = createSlice({
  name: "countSlice",
  initialState: { num: 1 },
  reducers: {
    up: (state, action) => {
      // console.log(state, action);
      console.log("up", action);
      state.num += action.payload;
      return state; //자동 탑재되어있음
    },
    down: (state, action) => {
      console.log("down");
      state.num -= action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {},
});

const store = configureStore({
  reducer: {
    countSlice: countSlice.reducer,
    // loginSlice: loginSlice.reducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <div className="border-1 p-3">
        App
        <ChildOneComp />
      </div>
    </Provider>
  );
}

function ChildOneComp() {
  const num = useSelector((state) => {
    return state.countSlice.num;
  });

  const dispatch = useDispatch();
  return (
    <>
      <div className="border-1">
        childOneComp
        <p>num : {num}</p>
        <div
          className="btn btn-accent btn-sm"
          onClick={() => {
            dispatch(countSlice.actions.up(1));
          }}
        >
          click_up
        </div>
        <div
          className="btn btn-dash btn-sm"
          onClick={() => {
            dispatch(countSlice.actions.down(1));
          }}
        >
          click_down
        </div>
      </div>
    </>
  );
}

export default App;
