import { useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
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

  const handelDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border-4 border-red-600 max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold uppercase border-2 border-black rounded-md bg-gray-400 p-1 px-5 text-center w-full">
          to do list
        </h1>
        <div className="max-w-lg mx-auto flex flex-col justify-center items-center bg-gray-300 rounded-lg p-5 my-3 w-full">
          {/* items */}
          <ul className="w-full">
            {todos.map(({ text, completed }, index) => {
              return (
                <div className="flex justify-between gap-5 items-center rounded-md border-2 px-1 my-2">
                  <li
                    onClick={() => handelItemDone(index)}
                    className={`list-disc text-xl break-words select-none cursor-pointer max-w-sm my-1 w-full ${
                      completed ? "line-through" : ""
                    }`}
                  >
                    {text}
                  </li>
                  <IoIosCloseCircle
                    onClick={() => handelDeleteItem(index)}
                    className="text-red-600 text-2xl"
                  />
                </div>
              );
            })}
          </ul>
          {/* input */}
          <div className="flex gap-3 justify-center w-full pt-2">
            <input
              ref={inputRef}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your notes..."
              required
            />
            <button
              onClick={handelAddToDo}
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
