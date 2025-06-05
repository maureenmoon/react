import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setUsername(res.data);
    }
    dataFetch();
  }, []);

  return (
    <div>
      <div className="container m-auto">
        <h3>userTitle</h3>
        <ul>
          {username.map((item, i) => {
            return <li key={i}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
