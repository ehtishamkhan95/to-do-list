import React, { useState } from "react";
import { addTask } from "./TaskReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        id: tasks[tasks.length - 1].id + 1,
        task: task,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="task">Task:</label>
            <input
              type="text"
              name={task}
              className="form-control"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
