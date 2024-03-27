import type { ChangeEvent } from "react"
import "./styles.css"
import type { TodoProps } from "./types"
import { useAppDispatch } from "store/hooks"
import { todoSliceActions } from "store/redux/todo/todoSlice"

function Todo({id, task, status}: TodoProps) {
const dispatch = useAppDispatch()

const handleCheckBoxValue = (evt: ChangeEvent<HTMLInputElement>) => {
  dispatch(todoSliceActions.isComplete({id, status: evt.target.checked}))
}
  return (
    <div className="todo_wrapper">
      <div className="task_container">
        <span style={{textDecoration: status ? 'line-through' : 'none' }}>{task}</span>
      </div>
      <div className="todo_input_container">
        <input type="text" defaultValue="Another name for this task" />
      </div>
      <div className="task_wrapper">
        <div className="task_button">
          <span>Edit</span>
        </div>
        <div className="task_button">
          <span>Delete</span>
        </div>
        <div className="checkbox_container">
          <input className="task_input" type="checkbox"
          onChange={handleCheckBoxValue}
          checked={status}
          />
        </div>
      </div>
    </div>
  )
}

export default Todo
