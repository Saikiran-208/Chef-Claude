import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-2 p-4 border-b border-gray-200 shadow bg-white'>
      <img className='w-12 h-11' src="/src/assets/chef.png" alt="chef img" />
      <p className='text-4xl '>Chef Claude</p>
      
    </div>
    </>
  )
}

export default Navbar
