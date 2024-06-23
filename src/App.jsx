import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handelAddToDo = () => {
    const text = inputRef.current.value;
    setTodos([...todos, text]);
    inputRef.current.value = "";
  };
  return (
    <div className="flex flex-col justify-center items-center border-4 border-gray-600 max-w-2xl mx-auto my-10 p-4">
      <div className="">
        <h1 className="text-2xl font-bold uppercase border-2 border-black rounded-md bg-gray-400 p-1 px-5 text-center">to do list</h1>
        <ul className="list-disc px-8 border my-2">
          {todos.map((item) => {
            return <li className="">{item}</li>;
          })}
        </ul>
        <div className="flex gap-3">
          <input ref={inputRef} type="text" className="border-2 rounded-md select-none text-2xl placeholder:px-1 " placeholder="write some thing..." />
          <button onClick={handelAddToDo} className="border px-4 rounded-md">
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
