import React from "react";
import Todo from "./Todo";
export default function Todolist({
  todoList,
  OnCheckBtnClick,
  OnRemoveBtnClick,
}) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          OnCheckBtnClick={OnCheckBtnClick}
          OnRemoveBtnClick={OnRemoveBtnClick}
        />
      ))}
    </>
  );
}
