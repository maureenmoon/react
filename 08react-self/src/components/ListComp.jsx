import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListComp() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    async function listData() {
      const listDataView = await axios.get("http://localhost:8080/test");
    }
    listData();
  }, []);

  return (
    <div>
      <h3>글리스트</h3>
      <hr />
    </div>
  );
  <Link to="/">홈</Link>;
}

export default ListComp;
