import React from 'react'
import TaskItem from './TaskItem'

function TaskList({task}) {
  return (
    <div className='p-2'>
      <h2 className="text-2xl ">Your Tasks</h2>
      <br />
     <TaskItem task={task} />
      </div>
  )
}

export default TaskList