import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";
import axios from "axios";

function App() {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    async function dataFech() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      // console.log(res.data);

      setUsername(res.data);
    }
    dataFech();
  }, []);
  return (
    <>
      <div className="container">
        <h3>username</h3>
        {username.map((item) => {
          return (
            <>
              <div>{item.name}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
