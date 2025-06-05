import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import CounterComp from "./components/CounterComp";
import ChildComp from "./components/ChildComp";

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ border: "1px solid #000", padding: "10px" }}>
          <div>App</div>
          <div style={{ display: "flex" }}>
            <CounterComp />
            <ChildComp />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
