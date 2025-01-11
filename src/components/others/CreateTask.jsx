import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [Task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Create the new task object directly instead of using state
    const newTask = {
        taskTitle,
        taskDate,
        taskDesc,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    };

    // Get data from localStorage
    const data = userData.employees;

    // Update the tasks array for the matching employee
    const updatedData = data.map((elem) => {
        if (assignTo === elem.name) {
            return {
                ...elem,
                tasks: [...elem.tasks, newTask]
            };
        }
        return elem;
    });
    // Save back 
    setUserData(prevData => ({
      ...prevData,
      employees: updatedData
    })); 
    
    // Clear the form fields
    setTaskTitle('');
    setTaskDesc('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setTask(newTask);
  };
  return (
    <div className="p-5 bg-zinc-600 mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className="w-1/2">
          <div>
            <h3 className=" text-gray-300 mb-0.5">Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{
              setTaskTitle(e.target.value);
            }}
              className="w-full py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Make a Task"
            />
          </div>
          <div>
            <h3 className=" text-gray-300 mb-0.5">Date</h3>
            <input value={taskDate} onChange={(e)=>{
              setTaskDate(e.target.value);
            }}
              className=" w-full py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className=" text-gray-300 mb-0.5">Assign to</h3>
            <input value={assignTo} onChange={(e)=>{
              setAssignTo(e.target.value);
            }}
              className=" w-full py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className=" text-gray-300 mb-0.5">Category</h3>
            <input value={category} onChange={(e)=>{
              setCategory(e.target.value);
            }}
              className=" w-full py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="design, dev, etc"
              id=""
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className=" text-gray-300 mb-0.5">Description</h3>
          <textarea value={taskDesc} onChange={(e)=>{
              setTaskDesc(e.target.value);
            }}
            className="w-full h-44 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-md text-sm mt-4 w-full font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
