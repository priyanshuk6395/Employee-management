import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='p-10 rounded-xl w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.tasks.filter(task => task.newTask).length}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p-10 rounded-xl w-[45%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.tasks.filter(task => task.completed).length}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='p-10 rounded-xl w-[45%] bg-yellow-500'>
            <h2 className='text-3xl font-semibold'>{data.tasks.filter(task => task.active).length}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='p-10 rounded-xl w-[45%] bg-red-600'>
            <h2 className='text-3xl font-semibold'>{data.tasks.filter(task => task.failed).length}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3> 
        </div>
    </div>
  )
}

export default TaskListNumbers
