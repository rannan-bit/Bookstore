import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faBook, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axiosinstance'



function Sidebar() {
  const [userName, setUserName] = useState("")
  const [dp, setDp] = useState("")
  console.log(userName);
  

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      let user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
      setUserName(user.username)
      console.log(user);
      


    }
  })
  return (
    <div className='h-full bg-blue-300'>
      <div className='flex flex-row items-center justify-between gap-2 p-3 sm:p-4 md:flex-col md:justify-start'>
        <div className='flex min-w-0 flex-row items-center gap-2 md:flex-col md:gap-0'>
          <img src={dp == "" ? 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' : dp?.startsWith('https://lh3.googleusercontent.com/') ? dp : `${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" style={{height:'100px',width:'100px', borderRadius:'50%'}} />
          <h1 className='text-sm font-bold sm:text-base md:text-xl'>{userName}</h1>
        </div>
        <div className='flex flex-row items-center gap-1 md:my-10 md:flex-col md:items-stretch md:gap-0'>
          <div className='my-0 rounded px-2 py-2 text-sm hover:bg-blue-200 sm:px-3 md:my-3'>
            <FontAwesomeIcon icon={faHouse} />
            <Link to={'/admin-dashboard'} className='mx-1 sm:mx-2'>
              Home
            </Link>
          </div>
          <div className='my-0 rounded px-2 py-2 text-sm hover:bg-blue-200 sm:px-3 md:my-3'>
            <FontAwesomeIcon icon={faBook} />
            <Link to={'/admin-resources'} className='mx-1 sm:mx-2'>
              All Books
            </Link>
          </div>
          <div className='my-0 rounded px-2 py-2 text-sm hover:bg-blue-200 sm:px-3 md:my-3'>
            <FontAwesomeIcon icon={faGear} />
            <Link to={'/admin-settings'} className='mx-1 sm:mx-2'>
              Settings
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Sidebar