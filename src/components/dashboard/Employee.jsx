import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../tasklist/TaskList'
const Employee = (props) => {
  return (
    <div className='p-20 bg-zinc-900 h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default Employee