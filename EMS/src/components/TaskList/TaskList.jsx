import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div className="w-full mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5 text-center sm:text-left">
        Your Tasks
      </h2>

      <div className="flex overflow-x-auto gap-5 py-4 px-2 sm:px-0">
        {data.tasks && data.tasks.length > 0 ? (
          data.tasks.map((task, idx) => {
            if (task.active) return <AcceptTask key={idx} data={task} />
            if (task.newTask) return <NewTask key={idx} data={task} />
            if (task.completed) return <CompleteTask key={idx} data={task} />
            if (task.failed) return <FailedTask key={idx} data={task} />
            return null
          })
        ) : (
          <div className="text-white text-center w-full">No tasks assigned yet.</div>
        )}
      </div>
    </div>
  )
}

export default TaskList
