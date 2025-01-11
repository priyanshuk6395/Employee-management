import React, { useState } from 'react'

const Header = (props) => {
  const username = props.data?.name || 'Admin';
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='font-semibold text-2xl'>Hello <br/> {username} 👋🏻 </h1>
        <button onClick={logOutUser} className='bg-red-600 px-3 py-2 text-lg font-medium rounded-md'>Log Out</button>
    </div>
  )
}

export default Header