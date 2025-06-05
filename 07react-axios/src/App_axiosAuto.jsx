import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";
import axios from "axios";

function App() {
  const [username, setUsername] = useState([]);
  // 저장공간 생성

  useEffect(() => {
    async function dataFetch() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");

      console.log(res.data);
      setUsername(res.data);
    }
    dataFetch();
  }, []);

  return (
    <>
      <div className="container">
        <h3>username</h3>
        {/* {username.map((item)=>{})} */}
        {username.map((item) => {
          return (
            <>
              <div>{item.username}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
