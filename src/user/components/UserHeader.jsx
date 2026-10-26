import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosinstance'








function UserHeader() {
    const [listStatus, setListStatus] = useState(false)
    const [token, setToken] = useState("")
    const [userDp, setUserDp] = useState("")
    const [dropDwn, setDropDwn] = useState(false)
    const [userId, setUserId] = useState("")

    const navigate=useNavigate()

    const logout=()=>{
        sessionStorage.clear()
        setToken("")
        setUserDp("")
        setUserId("")
        navigate('/login')
    }

    useEffect(() => {
        if (sessionStorage.getItem("user") && sessionStorage.getItem("token")) {
            const userToken = sessionStorage.getItem("token")
            const user = JSON.parse(sessionStorage.getItem("user"))
            setToken(userToken)
            setUserDp(user.picture)
            setUserId(user._id)
            console.log(user);

        }
    }, [token])
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
                    {
                        !token ?
                            <Link to={'/login'} className='border ms-5 border-black py-2 px-3 rounded'>
                                <FontAwesomeIcon icon={faUser} className='text-large'></FontAwesomeIcon>
                                Login
                            </Link>
                            :
                            <div>
                                {/*profile*/}
                                <button onClick={() => setDropDwn(!dropDwn)} className='shadow-sm round p-1'>
                                    <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={userDp == "" ? 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' :userDp?.startsWith('https://lh3.googleusercontent.com/')?userDp: `${axiosInstance.defaults.baseURL}/uploads/${userDp}`} alt="" />
                                </button>
                                {/*dropdown*/}
                                {
                                    dropDwn &&
                                    <div className='absolute right-0 top-20 bg-white shadow w-40 rounded ring-black/40 p-2'>
                                        <Link to={`/profile/${userId}`} className='p-2'>Profile</Link>
                                        <button className='p-2 block'onClick={logout}>Logout</button>
                                    </div>
                                }
                            </div>
                    }
                </div>
            </div>

            <nav className='md:flex justify-center bg-black text-white p-3'>
                <div className='flex justify-between items-center w-full md:hidden'>
                    <button onClick={() => setListStatus(!listStatus)}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                    {
                        !token ?
                            <Link to={'/login'} className='border ms-5 border-black py-2 px-3 rounded'>
                                <FontAwesomeIcon icon={faUser} className='text-large'></FontAwesomeIcon>
                                Login
                            </Link>
                            :
                            <div>
                                {/*profile*/}
                                <button onClick={() => setDropDwn(!dropDwn)} className='shadow-sm round p-1'>
                                    <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={userDp == "" ? 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' : userDp?.startsWith('https://lh3.googleusercontent.com/')?userDp: `${axiosInstance.defaults.baseURL}/uploads/${userDp}`} alt="" />
                                </button>
                                {/*dropdown*/}
                                {
                                    dropDwn &&
                                    <div className='absolute right-0 top-36 bg-white shadow w-40 rounded ring-black/40 p-2'>
                                        <Link to={`/profile/${userId}`} className='p-2 text-black'>Profile</Link>
                                        <button className='p-2 block text-black'>Logout</button>
                                    </div>
                                }
                            </div>
                    }
                </div>
                <div className={listStatus ? 'flex flex-col' : 'md:flex hidden'}>
                    <Link to={'/'} className='mx-4 mt-3 md:font-bold'>Home</Link>
                    <Link to={'/all-books'} className='mx-4 mt-3 md:font-bold'>Books</Link>
                    <Link to={'/contact'} className='mx-4 mt-3 md:font-bold'>Contact</Link>
                </div>
            </nav>
        </>



    )
}

export default UserHeader