import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
// React : export default (하나만 가져옴)
// {} : export(여러 데이터중에 가져옴)

function App() {
  // 배열데이터는 useSTATE(상태변화)에 넣어 사용
  // const todos = [
  //   { id: 1, text: "react", completed: true },
  //   { id: 2, text: "tailwind", completed: false },
  // ];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  // [...]: array 복사하는 형식

  // useEffect(function:프로그램실행,array): store data and run functions. mount될때만 실행하게 하기위해 array([])표기
  // axios 데이터연결할때도 사용
  useEffect(() => {
    const store = localStorage.getItem("todo");
    if (store) {
      setTodoList(JSON.parse(store));
    }
    console.log("useEffect1");
  }, []);

  useEffect(() => {
    console.log("todoList변화");
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo() {
    // alert("addTodo");
    if (input.trim() === "") {
      alert("input data");
      return;
    }

    const newTodo = { id: Date.now(), text: input, completed: false };
    console.log(newTodo);
    setTodoList([newTodo, ...todoList]);
    // new + 기존 배열데이터
    setInput("");
  }

  function deleteTodo(id) {
    // alert("todo : " + id);
    setTodoList(
      todoList.filter((item) => {
        return item.id !== id;
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
          {/* {todoList.map((item) => { */}
          {todoList.map((item, i) => {
            return (
              <>
                {/* <TodoItem item={item} /> */}
                <TodoItem
                  key={i}
                  item={todoList[i]}
                  toggleTodo2={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
