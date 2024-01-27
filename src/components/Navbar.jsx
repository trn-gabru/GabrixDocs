import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";

function Navbar({ addNewCard }) {
  const [addTrue, setAddTrue] = useState(false);
  const date = new Date().toLocaleDateString();

  const [task, setTask] = useState({
    taskTitle: "",
    taskDate: date,
    taskColor: "#2563eb",
  });

  const updateTask = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const addItem = () => {
    setAddTrue(!addTrue);
    // console.log("cli");
  };

  const addNewTask = () => {
    if (task.taskTitle.trim() === "") {
      // Handle the case where taskTitle is empty
      return;
    }
    // Create a new card based on the task state in Navbar
    const newCard = {
      title: task.taskTitle,
      date: task.taskDate,
      tagColor: task.taskColor,
      zIndex: 10,
    };

    // Call the addNewCard callback to update the cards in Foreground
    addNewCard(newCard);

    // Reset the task state or perform any other necessary actions
    setTask({
      taskTitle: "",
      taskDate: date,
      taskColor: "#2563eb",
    });

    setAddTrue(false);
  };

  return (
    <>
      <div className="absolute backdrop-blur-md shadow-lg shadow-zinc-900/40 w-full h-20 h z-[4] px-10 flex justify-between items-center">
        <div className="text-white text-3xl font-semibold">Gabrix Docs</div>
        <div className="text-white cursor-pointer" onClick={addItem}>
          Add Task +
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission behavior
          addNewTask();
        }}
        // method="Post"
        // action="/addtask"
        className={` 
        ${
          addTrue ? "flex" : "hidden"
        } addI absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[5] w-2/5 h-96 rounded-[30px] backdrop-blur-md shadow-lg shadow-zinc-900 p-10  flex-col items-center`}
      >
        <span
          onClick={addItem}
          className="absolute -top-2 -right-2 w-7 h-7 bg-zinc-100 rounded-full flex items-center cursor-pointer justify-center"
        >
          <IoClose />
        </span>
        <h2 className="text-white font-semibold text-2xl mb-5 ">Add Task</h2>
        <textarea
          // required
          className="text-white w-full outline-0 border-zinc-600 focus:border-zinc-100 hover:border-zinc-100  bg-transparent border rounded-[20px] p-3 duration-300"
          type="text"
          name="taskTitle"
          placeholder="Add Task"
          value={task.taskTitle} // Set the value to the state variable
          onChange={updateTask}
          rows="20"
        />
        <div className="w-full flex justify-between items-center text-white">
          <div> {date} </div>
          <input
            type="color"
            className="w-10 h-10 bg-transparent rounded-full"
            name="taskColor"
            value={task.taskColor} // Set the value to the state variable
            onChange={updateTask}
            // You can add more Tailwind CSS classes or styles as needed
          />
        </div>

        <button
          // onClick={addNewTask}
          className=" absolute -bottom-7 hover:text-blue-600 duration-300 text-blue-400 text-[7vh]"
          type="submit"
        >
          <IoIosAddCircle />
        </button>
      </form>
    </>
  );
}

export default Navbar;
