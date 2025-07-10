import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const updatedData = userData.map((user) => {
      if (user.firstName === asignTo) {
        user.tasks.push(task)
        user.taskCounts.newTask += 1
      }
      return user
    })

    setUserData(updatedData)
    toast.success('Task Created Successfully!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    })

    // Clear form
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
      <form
        onSubmit={submitHandler}
        className='flex flex-wrap w-full items-start justify-between'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Make a UI design'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='date'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='employee name'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='design, dev, etc'
              required
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
            placeholder='Write task details here...'
            required
          ></textarea>
          <button
            type='submit'
            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'
          >
            Create Task
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  )
}

export default CreateTask
