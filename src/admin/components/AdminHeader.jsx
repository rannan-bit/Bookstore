import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'




function AdminHeader() {
  return (
    <div>
      <div className='grid grid-cols-2 p-3'>
        <div className='flex items-center'>
          <img src="/logo-header.png" alt="" width={'51.67px'} height={'47px'} />
          <h1 className='text-2xl font-bold ms-2 '>BOOKSTORE</h1>
        </div>
        <div className='flex justify-end '>
          <Link to={'/login'} className='border ms-5 border-black py-2 px-3 rounded'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-large'></FontAwesomeIcon>
            Logout
          </Link>
        </div>
      </div>

      <nav className='md:flex justify-center bg-black text-white p-3'>
        <marquee behavior="" direction="">Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!</marquee>
        
      </nav>
    </div>
  )
}

export default AdminHeader