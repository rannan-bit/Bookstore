import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'







function UserHeader() {
    const [listStatus,setListStatus]=useState(false)
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                <div className='flex items-center'>
                    <img src="/logo-header.png" alt="" width={'51.67px'} height={'47px'} />
                    <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
                </div>
                <div className='md:flex items-center justify-center hidden'>
                    <h1 className='text-3xl font-bold '>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-end hidden'>
                    <FontAwesomeIcon icon={faInstagram} className='text-2xl my-3'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} className='text-2xl my-3'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faSquareFacebook} className='text-2xl my-3'></FontAwesomeIcon>
                    <Link to={'/login'} className='border ms-5 border-black py-2 px-3 rounded'>
                        <FontAwesomeIcon icon={faUser} className='text-large'></FontAwesomeIcon>
                        Login
                    </Link>
                </div>
            </div>

            <nav className='md:flex justify-center bg-black text-white p-3'>
                <div className='flex justify-between items-center w-full md:hidden'>
                    <button onClick={()=>setListStatus(!listStatus)}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                    <Link to={'/login'} className='border ms-5 border-white py-2 px-3 rounded'>
                        <FontAwesomeIcon icon={faUser} className='text-large'></FontAwesomeIcon>
                        Login
                    </Link>
                </div>
                <div className={listStatus?'flex flex-col':'md:flex hidden'}>
                    <Link to={'/'} className='mx-4 mt-3 md:font-bold'>Home</Link>
                    <Link to={'/all-books'} className='mx-4 mt-3 md:font-bold'>Books</Link>
                    <Link to={'/contact'} className='mx-4 mt-3 md:font-bold'>Contact</Link>
                </div>
            </nav>
        </>



    )
}

export default UserHeader