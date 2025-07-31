import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthStatus } from "./slices/loginSlice";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.loginSlice.isAuthenticated
  );

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <div className="container mx-auto bg-accent">
      {!isAuthenticated ? <Login /> : <Dashboard />}
    </div>
  );
}

export default App;
