import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0  w-[320px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate} </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
    </div>  
  )
}

export default FailedTask