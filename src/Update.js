import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "./TaskReducer";

function Update() {
  const { id } = useParams();
  const tasks = useSelector((state) => state.users);
  const existingTask = tasks.filter((f) => f.id == id);
  const [updatedTask, setUpdatedTask] = useState(existingTask[0].name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateTask({
        id: id,
        task: updatedTask,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update Task</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="task">Task:</label>
            <input
              type="text"
              name="task"
              value={updatedTask}
              className="form-control"
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
