import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap mt-10 gap-4 sm:gap-6 justify-center sm:justify-between">
      {/* New Task */}
      <div className="w-full sm:w-[47%] lg:w-[23%] rounded-xl py-6 px-5 bg-blue-400 text-center">
        <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl mt-1 font-medium">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="w-full sm:w-[47%] lg:w-[23%] rounded-xl py-6 px-5 bg-green-400 text-center">
        <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl mt-1 font-medium">Completed Task</h3>
      </div>

      {/* Active Task */}
      <div className="w-full sm:w-[47%] lg:w-[23%] rounded-xl py-6 px-5 bg-yellow-400 text-black text-center">
        <h2 className="text-3xl font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-xl mt-1 font-medium">Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className="w-full sm:w-[47%] lg:w-[23%] rounded-xl py-6 px-5 bg-red-400 text-center">
        <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl mt-1 font-medium">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
