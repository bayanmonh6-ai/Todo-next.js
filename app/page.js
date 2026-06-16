"use client";

import { useState } from "react";
import { Todo } from "./_components/Todo";
import { TaskStats } from "./_components/TaskStats";


export default function Home() {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  console.log("taskuud maani", todos);

  const [selected, setSelected] = useState("all");
  const handleAll = () => {
    setSelected("all");
  };
  const handleActive = () => {
    setSelected("active");
  };
  const handleCompleted = () => {
    setSelected("completed");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  const filteredTask = todos.filter((todo) => {
    if (selected === "all") {
      return todo;
    } else if (selected === "active") {
      return !todo.checked;
    } else if (selected === "completed") {
      return todo.checked;
    }
  });

  const clickAdd = () => {
    if (!value.trim()) return;
    setNumber(number + 1);

    setTodos([
      ...todos,
      {
        id: number,
        text: value,
        checked: false,
      },
    ]);
    setValue("");
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) =>!todo.checked));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className=" w-full flex justify-center items-center ">
      <div className="w-94 border mt-15 rounded-lg h-fit px-4 py-6 flex flex-col gap-10 bg-[#FFFFFF] border-gray-100 p-6 shadow-lg">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <button
              className="text-center font-semibold text-[20px]"
              // onClick={clickAdd}
            >
              To-Do list
            </button>
            {/* <p>{number} Tasks</p> */}
            <div className="flex gap-1.5">
              <input
                className="border rounded-lg w-full pl-2"
                placeholder="Add a new task..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    clickAdd();
                  }
                }}
              />
              <button
                className="bg-[#3C82F6] rounded-lg px-4 py-3 text-[#F9F9F9] text-[14px] cursor-pointer transition-all duration-150 active:scale-95"
                onClick={clickAdd}
              >
                Add
              </button>
            </div>

            <div className="flex gap-1.5">
              <button
                className={` rounded-lg px-4 py-3 text-black text-[14px] cursor-pointer trasition-all duration-150 active:scale-95 ${selected == "all" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"} `}
                onClick={handleAll}
              >
                All
              </button>
              <button
                className={` rounded-lg px-4 py-3 text-black text-[14px] cursor-pointer transition-all duration-150 active:scale-95 ${selected == "active" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"} `}
                onClick={handleActive}
              >
                Active
              </button>
              <button
                className={` rounded-lg px-4 py-3 text-black text-[14px] cursor-pointer transition-all duration-150 active:scale-95 ${selected == "completed" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"} `}
                onClick={handleCompleted}
              >
                Completed
              </button>
            </div>
            {filteredTask.length == 0 ? (
              <div className="text-center font-normal text-[14px] text-[#6B7280]">
                No tasks yet. Add one above!
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {filteredTask.map((item, index) => {
                  return (
                    <Todo key={item.id} value={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                  );
                })}
              </div>
            )}
            {todos.length > 0 && (
              <div className="flex justify-between items-center mt-4 border-t border-[#E4E4E7] pt-4">
              <TaskStats todos={todos} />
              <button onClick={clearCompleted}
                className="text-red-500 font-normal text-[14px] cursor-pointer transition-all duration-150 active:border-b-2 active:border-red-500 active:translate-y-1 "
                >
                Clear completed
                </button>
            </div>
            )}
            
          </div>
          <div className="text-center text-[12px] text-[#6B7280]">
            Powered by <span className="text-[#3B73ED]">Pinecone academy</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
