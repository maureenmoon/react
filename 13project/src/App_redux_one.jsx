import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import CounterComp from "./components/CounterComp";
import CounterChildComp from "./components/CounterChildComp";

function App() {
  return (
    <Provider store={store}>
      <div className="border-1 p-3">
        App
        <div className="flex gap-3">
          <CounterComp />
          <div>
            <CounterChildComp />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
