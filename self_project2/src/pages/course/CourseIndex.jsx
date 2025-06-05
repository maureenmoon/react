import React from "react";

import { Link, Outlet } from "react-router-dom";
import CourseLayout from "../../layouts/CourseLayout";

function CourseIndex() {
  return (
    <CourseLayout>
      <div className="flex justify-center">
        <span className="flex gap-3">
          <Link to="list">리스트</Link>
          <Link to="view">뷰</Link>
        </span>
      </div>
      <div>
        <Outlet />
      </div>
    </CourseLayout>
  );
}

export default CourseIndex;
