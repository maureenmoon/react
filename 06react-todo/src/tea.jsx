import React, { useState } from "react";

function App() {
  const todos = [
    { id: 1, text: "react", completed: true },
    { id: 2, text: "tailwind", completed: false },
  ];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([...todos]);

  function addTodo() {
    if (input.trim() === "") {
      alert("input data");
      return;
    }

    const newTodo = { id: Date.now(), text: input, completed: false };
    console.log(newTodo);
    setTodoList([newTodo, ...todoList]);
    setInput("");
  }

  function deleteTodo(id) {
    setTodoList(
      todoList.filter((innerItem) => {
        return innerItem.id !== id;
      })
    );
  }
  return (
    <>
      <div className="border m-auto mt-12">
        <h1 className="text-center ">Todo app</h1>
        <div className="flex">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="input todo list"
            className="flex-1"
          />
          <button onClick={addTodo} className="bg-blue-500">
            add
          </button>
        </div>
        <ul>
          {todoList.map((item) => {
            return (
              <>
                <li className="flex justify-between items-center">
                  <span
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                      color: item.completed ? "blue" : "black",
                    }}
                  >
                    {item.text}
                  </span>
                  <button
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    del
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
