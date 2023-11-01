import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "./Data";

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskList,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const taskToDelete = state.find((task) => task.id === id);
      if (taskToDelete) {
        return state.filter((task) => task.id !== id);
      }
    },
    updateTask: (state, action) => {
      const { id, task } = action.payload;
      const taskToUpdate = state.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.task = task;
      }
    },
  },
});
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
