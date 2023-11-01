import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "./TaskReducer";

function Home() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  return (
    <div className="container">
      <h2> TO DO LIST</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>

        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.id}</td>
            <td>{task.task}</td>
            <td>
              <Link
                to={`/edit/${task.id}`}
                className="btn btn-sm btn-primary active"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-sm btn-danger ms-2 active"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Home;
