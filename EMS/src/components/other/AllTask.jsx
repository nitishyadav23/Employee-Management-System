import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      {/* Header Row */}
      <div className="bg-red-400 mb-3 py-2 px-4 rounded hidden md:flex justify-between">
        <h2 className="text-sm md:text-base font-medium w-1/5">Employee Name</h2>
        <h3 className="text-sm md:text-base font-medium w-1/5">New Task</h3>
        <h5 className="text-sm md:text-base font-medium w-1/5">Active</h5>
        <h5 className="text-sm md:text-base font-medium w-1/5">Completed</h5>
        <h5 className="text-sm md:text-base font-medium w-1/5">Failed</h5>
      </div>

      {/* Employee Rows */}
      <div className="space-y-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 py-3 px-4 rounded flex flex-col md:flex-row md:items-center md:justify-between bg-[#2a2a2a] gap-2 md:gap-0"
          >
            <div className="w-full md:w-1/5 text-sm md:text-base text-white">
              <span className="md:hidden font-semibold">Employee: </span>
              {elem.firstName}
            </div>
            <div className="w-full md:w-1/5 text-sm md:text-base text-blue-400">
              <span className="md:hidden font-semibold">New: </span>
              {elem.taskCounts.newTask}
            </div>
            <div className="w-full md:w-1/5 text-sm md:text-base text-yellow-400">
              <span className="md:hidden font-semibold">Active: </span>
              {elem.taskCounts.active}
            </div>
            <div className="w-full md:w-1/5 text-sm md:text-base text-green-300">
              <span className="md:hidden font-semibold">Completed: </span>
              {elem.taskCounts.completed}
            </div>
            <div className="w-full md:w-1/5 text-sm md:text-base text-red-500">
              <span className="md:hidden font-semibold">Failed: </span>
              {elem.taskCounts.failed}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
