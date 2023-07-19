import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  function handleAddTask(task) {
    setTaskList((taskList) => [...taskList, task]);
  }
  function handleToggle(id) {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }
  function handleDelete(id) {
    setTaskList((taskList) => taskList.filter((task) => task.id !== id));
  }
  function handleClearList() {
    setTaskList([]);
  }
  return (
    <div className="h-screen">
      <Logo />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        taskList={taskList}
        onToggleTask={handleToggle}
        onDelete={handleDelete}
        onClearList={handleClearList}
      />
      <Stats taskList={taskList} />
    </div>
  );
}

function Logo() {
  return (
    <h1 className="flex justify-center items-center text-4xl font-mono h-24 bg-amber-700 text-black">
      📝To do List
    </h1>
  );
}
function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTask = { id: Date.now(), task, done: false };
    onAddTask(newTask);

    setTask("");

    console.log(newTask);
  }

  return (
    <form
      className="flex justify-center p-2.5 bg-yellow-200"
      onSubmit={handleSubmit}
    >
      <label className="flex justify-center items-center font-mono text-2xl mr-5">
        Task
      </label>
      <input
        className="border-2 border-black rounded px-2"
        type="text"
        placeholder="task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button className="bg-zinc-800  ml-6 text-white rounded px-5 py-2 hover:bg-black">
        Add
      </button>
    </form>
  );
}
function TaskList({ taskList, onToggleTask, onDelete, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;

  if (sortBy === "input") {
    sortedList = taskList;
  } else if (sortBy === "alphabetic") {
    sortedList = taskList.slice().sort((a, b) => a.task.localeCompare(b.task));
  } else if (sortBy === "undone") {
    sortedList = taskList
      .slice()
      .sort((a, b) => Number(a.done) - Number(b.done));
  }

  return (
    <div className="bg-orange-400 h-4/6 p-10 flex justify-evenly flex-wrap">
      {sortedList.map((task) => (
        <Task
          id={task.id}
          task={task.task}
          done={task.done}
          key={task.id}
          onToggleTask={onToggleTask}
          onDelete={onDelete}
        />
      ))}
      <div className="mt-96 fixed">
        <select
          className="bg-black text-white rounded pb-1 px-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="alphabetic">Sort by alphabetic order</option>
          <option value="undone">Sort by undone tasks</option>
        </select>
        <button
          className="ml-5 bg-black text-white rounded px-2 pb-1"
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

function Task({ id, task, done, onToggleTask, onDelete }) {
  return (
    <div className="flex items-start">
      <input
        className="flex items-center accent-lime-600 h-5 w-6 rounded-full mt-1"
        type="checkbox"
        value={done}
        onChange={() => onToggleTask(id)}
      ></input>
      <h3
        className={
          done
            ? "flex items-center text-xl ml-2 line-through"
            : "flex items-center text-xl ml-2"
        }
      >
        {task}
      </h3>
      <span
        className="flex items-center text-xl ml-2 cursor-pointer"
        onClick={() => onDelete(id)}
      >
        ❌
      </span>
    </div>
  );
}

function Stats({ taskList }) {
  const length = taskList.length;
  const taskDone = taskList.filter((task) => task.done !== false).length;

  return (
    <div className="flex justify-center items-center text-2xl font-mono h-24 bg-amber-700  text-black">
      {length === 0 ? (
        <h1>You have no task right now</h1>
      ) : length !== 0 && length === taskDone ? (
        <h1>You have done all the tasks.</h1>
      ) : (
        <h1>
          You have {length} tasks and you have done {taskDone}
        </h1>
      )}
    </div>
  );
}
