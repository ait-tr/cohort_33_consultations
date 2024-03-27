
import { useState } from "react"
import type { ChangeEvent } from "react"
import Todo from "./Todo"
import "./styles.css"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { todoSliceActions, todoSliceSelectors } from "store/redux/todo/todoSlice"
import { v4 } from 'uuid'

function Todoes() {
  const [inputValue, setInputValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(todoSliceSelectors.tasks)

  const handleInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }

  const handelSendTask = () => {
    dispatch(todoSliceActions.addTask({id: v4(), task: inputValue}))
    setInputValue('')
    
  }

  const myTasks = tasks.map((task) => {
    return <Todo key={v4()} id={task.id} task={task.task} status={task.status}/>
  })

  return (
    <div className="page_wrapper">
      <div className="content_wrapper">
      <div className="input_wrapper">
        <div className="input_container">
          <input className="tasks_input" type="text"
          onChange={handleInputValue}
          value={inputValue}
          />
        </div>
        <div className="send_button" 
        onClick={handelSendTask}
        >
          <span>send</span>
        </div>
      </div>
      <div className="todoes_wrapper"> 
      {myTasks}
      </div>
      </div>
    </div>
  )
}

export default Todoes
