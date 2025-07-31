import React, { useEffect, useState } from "react";
import axios from "axios";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("popular"); // or "recent"
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/courses/top8?sort=${sortType}`)
      .then((res) => {
        console.log("Courses API resource : ", res.data); //VERIFY the result
        if (Array.isArray(res.data)) {
          setCourses(res.data);
          setError(null); // clear any previous error
        } else {
          setError("API returned non-array data");
        }
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);
        setError("Failed to fetch course data");
      });
  }, [sortType]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Top 8 Courses ({sortType})</h2>
      <div className="mb-4">
        <button className="mr-2" onClick={() => setSortType("recent")}>
          Recent
        </button>
        <button onClick={() => setSortType("popular")}>Popular</button>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <li key={course.courseId} className="border p-2 rounded shadow">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
