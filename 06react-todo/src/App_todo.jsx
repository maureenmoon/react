import React, { useState } from "react";
// React : export default (하나만 가져옴)
// {} : export(여러 데이터중에 가져옴)

function App() {
  // 배열데이터는 useSTATE(상태변화)에 넣어 사용
  const todos = [
    { id: 1, text: "react", completed: true },
    { id: 2, text: "tailwind", completed: false },
  ];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([...todos]);
  // [...]: array 복사하는 형식

  function addTodo() {
    // alert("addTodo");
    if (input.trim() === "") {
      alert("input data");
      return;
    }

    const newToto = { id: Date.now(), text: input, completed: false };
    console.log(newToto);
    setTodoList([newToto, ...todoList]);
    // new + 기존 배열데이터
    setInput("");
  }

  function deleteTodo(id) {
    // alert("todo : " + id);
    setTodoList(
      todoList.filter((innerItem) => {
        return innerItem.id !== id;
      })
    );
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  }

  return (
    <>
      <div className="p-4 border w-[500px] m-auto mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO app</h1>
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
              // e.target: 이벤트 발생된 DOM요소
            }}
            value={input}
            placeholder="할일을 입력하세요"
            className="flex-1 border p-2 rounded border-gray-300 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            추가
          </button>
        </div>
        <ul className="py-2">
          {todoList.map((item) => {
            return (
              <>
                <li className="flex justify-between items-center py-4 border-b">
                  <span
                    onClick={() => {
                      toggleTodo(item.id);
                    }}
                    style={{
                      // 변수쓸때 중괄호, inline-style쓸때 key-value형태로 사용
                      textDecoration: item.completed ? "line-through" : "none",
                      color: item.completed ? "blue" : "black",
                    }}
                  >
                    {item.text}
                  </span>
                  <button
                    className="text-red-500 text-sm hover:underline"
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    삭제
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
