import React from "react";
import TestLayoutComp from "../../layouts/TestLayoutComp";
import { Outlet } from "react-router-dom";

function TestIndexPageComp() {
  return (
    <>
      <TestLayoutComp>
        <div>
          <Outlet />
          {/* children자리 */}
        </div>
      </TestLayoutComp>
    </>
  );
}

export default TestIndexPageComp;
