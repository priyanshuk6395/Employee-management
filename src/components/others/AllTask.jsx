import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
   const [userData,setUserData] = useContext(AuthContext);
   
   return (
    <div className='bg-zinc-800 p-5 mt-5 w-full rounded-md'>
      <div className='bg-zinc-700 py-2 px-4 flex justify-between rounded mb-2 font-semibold'>
               <h2 className='w-1/5 text-white'>Employee Name</h2>
               <h3 className='w-1/5 text-yellow-400'>New Task</h3>
               <h3 className='w-1/5 text-blue-400'>Active Task</h3>
               <h3 className='w-1/5 text-green-400'>Completed Task</h3>
               <h3 className='w-1/5 text-red-400'>Failed Task</h3>
      </div>
      <div className='h-[80%] overflow-auto '>
      {
         userData.employees.map((elem, index) => (
            <div key={index} className='border-zinc-400 border-2 py-2 px-3 flex justify-between rounded mb-2'>
               <h2 className='font-medium w-1/5 text-white'>{elem.name}</h2>
               <h3 className='font-medium w-1/5 text-yellow-500'>{elem.tasks.filter(task => task.newTask).length}</h3>
               <h3 className='font-medium w-1/5 text-blue-500'>{elem.tasks.filter(task => task.active).length}</h3>
               <h3 className='font-medium w-1/5 text-green-500'>{elem.tasks.filter(task => task.completed).length}</h3>
               <h3 className='font-medium w-1/5 text-red-500'>{elem.tasks.filter(task => task.failed).length}</h3>
            </div>
         ))
        }
      </div>
    </div>
  )
}

export default AllTask