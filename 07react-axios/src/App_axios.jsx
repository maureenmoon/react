import React, { useState } from "react";
import "./assets/css/style.scss";
import axios from "axios";

function App() {
  const [userData, setuserData] = useState([]);

  async function dataView() {
    // alert("test");
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    // jsonplaceholder 가상데이터실습용 - async
    console.log(res.data);
    // .data는 배열데이터 가져온다. useState로 가져온다
    setuserData(res.data);
  }
  return (
    <>
      {userData ? <>test</> : null}
      {userData && <>test</>}
      {/* data 선언을 해줘야 에러 안난다 */}
      <div className="container">
        <h3>testView</h3>
        <button onClick={dataView}>click</button>
        <div>
          {/* {userData && userData.map(()=>{})} */}
          {userData &&
            userData.map(() => {
              return (
                <>
                  <div>{item.name}</div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
