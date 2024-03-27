import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Task, TodoSliceState } from "./types"


const todoInitialState: TodoSliceState = {
 tasks:[]
}

const todoSlice = createSlice({
  name: "TODO",
  initialState: todoInitialState,
    reducers: create => ({
      addTask: create.reducer((state:TodoSliceState, action:PayloadAction<Task>) => {
        state.tasks = [...state.tasks, action.payload]
      }),
      isComplete: create.reducer((state:TodoSliceState, action:PayloadAction<Task>) => {
        state.tasks.map(task => {
          return [...state.tasks, task.id === action.payload.id ? task.status = action.payload.status : task]
        })
      })
  }),
  selectors: {
      tasks: ((state:TodoSliceState) => state.tasks)
  },
})
export const todoSliceActions = todoSlice.actions
export const todoSliceSelectors = todoSlice.selectors
export default todoSlice
