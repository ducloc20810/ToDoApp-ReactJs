import Todolist from "./components/Todolist";
import DoneList from "./components/DoneList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect } from "react";
import { v4 } from "uuid";
const TODO_APP_STORAGE_KEY = "TODO_APP";
const DONE_STORAGE_KEY = "DONE";
function App() {
  //INITIALIZE
  const [todoList, setTodolist] = useState([]); //array
  const [textInput, setTextinput] = useState("");
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    const storageDoneList = localStorage.getItem(DONE_STORAGE_KEY);
    if (storageTodoList) {
      setTodolist(JSON.parse(storageTodoList));
    }
    if (storageDoneList) {
      setDoneList(JSON.parse(storageDoneList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
    localStorage.setItem(DONE_STORAGE_KEY, JSON.stringify(doneList));
  }, [todoList, doneList]);

  const TextFieldOnchange = useCallback((e) => {
    setTextinput(e.target.value);
  }, []);

  const OnbtnClick = useCallback(
    (e) => {
      setTodolist([
        ...todoList,
        { id: v4(), name: textInput, isCompleted: false },
      ]);
      setTextinput("");
    },
    [textInput, todoList]
  );

  const OnRemoveBtnClick = useCallback(
    (id) => {
      setTodolist(todoList.filter((item) => item.id !== id));
    },
    [todoList]
  );

  const OnCheckBtnClick = useCallback(
    (id) => {
      setTodolist((item) =>
        item.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: true } : todo
        )
      );

      OnRemoveBtnClick(id);
      setDoneList([
        ...doneList,
        {
          id: v4(),
          name: todoList.find((item) => item.id === id).name,
          isCompleted: true,
        },
      ]);
    },
    [todoList, doneList, OnRemoveBtnClick]
  );

  const OnRemoveBtnDoneClick = useCallback(
    (id) => {
      setDoneList(doneList.filter((item) => item.id !== id));
    },
    [doneList]
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>TO DO APP</h1>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm"
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={OnbtnClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={TextFieldOnchange}
      ></Textfield>
      <div className="toDoList">
        <h2>To Do List</h2>

        <Todolist
          todoList={todoList}
          OnCheckBtnClick={OnCheckBtnClick}
          OnRemoveBtnClick={OnRemoveBtnClick}
        />
      </div>

      <div className="doneList">
        <h2>Done List</h2>
        <DoneList
          doneList={doneList}
          OnRemoveBtnDoneClick={OnRemoveBtnDoneClick}
        />
      </div>
    </>
  );
}

export default App;
