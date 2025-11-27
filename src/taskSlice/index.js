import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskArray: [],
    editingTask: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.taskArray.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskArray = state.taskArray.filter((t) => t.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, desc } = action.payload;

      state.taskArray = state.taskArray.map((task) =>
        task.id === id
          ? { ...task, title, desc }
          : task
      );

      state.editingTask=null;
    },
    editTask: (state, action) => {
      state.editingTask = action.payload;
    },
  },
});

export const { addTask, deleteTask, editTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
