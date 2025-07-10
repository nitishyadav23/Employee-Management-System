import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompleteTask = ({ data }) => {
  const handleCompleteClick = () => {
    toast.info('Task marked as completed!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    });
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='mt-6'>
        <button
          className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'
          onClick={handleCompleteClick}
        >
          Complete
        </button>
      </div>

      {/* Toast container (safe to include here if not already globally rendered) */}
      <ToastContainer />
    </div>
  );
};

export default CompleteTask;
