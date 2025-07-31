import React, { useReducer } from "react";

// 처음 화면 테스트할때
// function App() {
//   return (
//     <div>
//       {/* <div className="container m-auto bg-mint-500"> */}
//       <div className="container m-auto py-4 px-4">
//         <button className="btn">click</button>
//         <div className="card bg-base-100 w-[300px] shadow-sm">
//           <figure>
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//               alt="Shoes"
//             />
//           </figure>
//           <div className="card-body">
//             <div className="card-title">title</div>
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
//               voluptate!
//             </p>
//             <div className="card-actions justify-end">
//               <div className="btn btn-info">body</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const reducer = (state, action) => {
  console.log(state, action);

  // return (state = state + action.payload);

  switch (action.type) {
    // 여기에 프로그램 넣는다: 함수등을 여기에 만든다
    // 아래 dispatch의 type별로 값 변경
    case "incremental":
      return (state += action.payload);

    case "decremental":
      return (state -= action.payload);
    default:
      return state;
  }
};

function App() {
  const [num, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>test reducer</h1>
      <p>{num}</p>
      {/* action */}
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "incremental", payload: 1000 });
        }}
      >
        up
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          dispatch({ type: "decremental", payload: 63 });
        }}
      >
        down
      </button>
    </div>
  );
}

export default App;
