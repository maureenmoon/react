import React from "react";

function TodoItem({ item, toggleTodo2, deleteTodo }) {
  return (
    <li className="flex justify-between items-center py-4 border-b">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={item.completed}
          //   반복문 실행중이라 checked하면 바로 체크박스에 체크표기됨
          onChange={() => {
            toggleTodo2(item.id);
          }}
          className="accent-blue-500 w-4 h-4"
        />
        <span
          onClick={() => {
            toggleTodo2(item.id);
          }}
          style={{
            // 변수쓸때 중괄호, inline-style쓸때 key-value형태로 사용
            textDecoration: item.completed ? "line-through" : "none",
            color: item.completed ? "blue" : "black",
          }}
        >
          {item.text}
        </span>
      </div>
      <button
        className="text-red-500 text-sm hover:underline"
        onClick={() => {
          deleteTodo(item.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
