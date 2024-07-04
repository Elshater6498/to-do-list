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

  return (
    <div className="flex flex-col justify-center items-center border-4 border-gray-600 max-w-2xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold uppercase border-2 border-black rounded-md bg-gray-400 p-1 px-5 text-center">
        to do list
      </h1>
      <div className="max-w-lg min-w-[32rem] flex flex-col justify-center items-center bg-gray-300 rounded-lg p-5 my-3">
        {/* items */}
        <ul className="my-2">
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="flex justify-center items-center gap-5 items-center rounded-md border-2 px-1 my-2">
                <li
                  onClick={() => handelItemDone(index)}
                  className={`list-disc text-xl break-words select-none cursor-pointer w-full max-w-xs my-1 ${
                    completed ? "line-through" : ""
                  }`}
                >
                  {text}
                </li>
                <IoIosCloseCircle className="text-red-600 text-lg " />
              </div>
            );
          })}
        </ul>
        {/* input */}
        {/* <input
            ref={inputRef}
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
            required
          /> */}
        <div className="flex gap-3 justify-center w-full">
          <input
            ref={inputRef}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Search branch name..."
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
  );
}

export default App;
