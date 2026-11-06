import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routerContext } from '../../context/RouterGuardContext'




function AdminHeader() {
  const { setAuthorizedUser } = useContext(routerContext)

  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear()
    setAuthorizedUser(false)
    navigate('/login')
  }
  return (
    <div>
      <div className='flex items-center justify-between gap-2 p-3 sm:gap-4 sm:p-4'>
        <div className='flex min-w-0 items-center'>
          <img src="/logo-header.png" alt="" className='h-9 w-10 shrink-0 sm:h-12 sm:w-[52px]' />
          <h1 className='ms-2 truncate text-lg font-bold sm:text-2xl'>BOOKSTORE</h1>
        </div>
        <div className='flex shrink-0 justify-end'>
          <Link onClick={logout} className='flex items-center gap-2 rounded border border-black px-2 py-2 text-sm sm:px-3 sm:text-base'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-large'></FontAwesomeIcon>
            Logout
          </Link>
        </div>
      </div>

      <nav className='flex justify-center overflow-hidden bg-black p-2 text-sm text-white sm:p-3 sm:text-base'>
        <marquee behavior="" direction="">Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!</marquee>

      </nav>
    </div>
  )
}

export default AdminHeader