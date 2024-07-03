import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handelAddToDo = () => {
    const text = inputRef.current.value;
    const newText = { completed: false, text };
    setTodos([...todos, newText]);
    inputRef.current.value = "";
  };

  const handelItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center border-4 border-gray-600 max-w-2xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold uppercase border-2 border-black rounded-md bg-gray-400 p-1 px-5 text-center">
        to do list
      </h1>
      <div className="max-w-xl mx-auto">
        <ul className="px-8 my-2">
          {todos.map(({ text,completed }, index) => {
            return (
              <div className="flex justify-between items-center rounded-md">
                <li
                  onClick={() => handelItemDone(index)}
                  className={`hand text-xl w-full break-words select-none cursor-pointer border mx-5 ${completed?"line-through":""}`}
                >
                  {text}
                </li>
                <span className="bg-red-400 px-2 rounded-md text-sm cursor-pointer">X</span>
              </div>
            );
          })}
        </ul>
        <div className="flex gap-3 justify-center">
          <input
            ref={inputRef}
            type="text"
            className="border-2 border-black rounded-md outline-none bg-gray-400 text-2xl placeholder:px-1 placeholder:text-white"
            placeholder="write some thing...."
          />
          <button
            onClick={handelAddToDo}
            className="border-2 border-black px-4 rounded-md bg-green-500"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
