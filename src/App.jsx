import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState(["text"]);
  const inputRef = useRef();
  const handelAddToDo = () => {
    const text = inputRef.current.value;
    setTodos([...todos, text]);
    console.log(text);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-red-400">to do list</h1>
      <ul className="">
        {todos.map((item) => {
          return(<li className="">{item}</li>);
        })}
      </ul>
      <div>
        <input ref={inputRef} type="text" className="border" />
        <button onClick={handelAddToDo} className="border">
          add
        </button>
      </div>
    </div>
  );
}

export default App;
