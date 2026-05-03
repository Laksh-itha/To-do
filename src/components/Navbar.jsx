import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-200 py-2'>
        <div className='logo'>
            <span className='font-bold text-2xl mx-8'>iTask</span>
        </div>
      <ul className='flex gap-12 mx-9'>
        <li className='text-xl cursor-pointer hover:font-bold'>Home</li>
        <li className='text-xl cursor-pointer hover:font-bold'>About Us</li>
        <li className='text-xl cursor-pointer hover:font-bold'>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
