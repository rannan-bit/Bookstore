import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faBook, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='bg-blue-300 h-full '>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <img src="https://static.vecteezy.com/system/resources/previews/019/879/198/original/user-icon-on-transparent-background-free-png.png" alt="" style={{ height: '200px' }} className='my-5' />
        <h1 className='text-xl font-bold'>Bookstore Admin</h1>
        </div>
        <div className='flex flex-col my-10'>
          <div className='my-3 mx-3'>
            <FontAwesomeIcon icon={faHouse} />
            <Link to={'/admin-dashboard'} className=' mx-2'>
              Home
            </Link>
          </div>
          <div className='my-3 mx-3'>
            <FontAwesomeIcon icon={faBook} />
            <Link to={'/admin-resources'} className=' mx-2'>
              All Books
            </Link>
          </div>
          <div className='my-3 mx-3'>
            <FontAwesomeIcon icon={faGear} />
            <Link to={'/admin-settings'} className=' mx-2'>
              Settings
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Sidebar