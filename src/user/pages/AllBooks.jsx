import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'

function AllBooks() {
    const [token, setToken] = useState("")
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    })
    return (
        <div>
            <UserHeader />
            <section>
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-3xl font-bold my-10'>Collections</h1>
                        <div>
                            <input type="text" placeholder='Search by Title' className='border border-gray-300 my-5 w-100 p-1' />
                            <button className='bg-blue-700 p-1 text-white '>Search</button>
                        </div>
                    </div>

                    {
                        token ?
                            <div className='md:flex my-10'>
                                <div className='ms-20'>
                                    <h3 className='text-xl mb-10'>Filters</h3>
                                    <div className='flex flex-col me-20'>
                                        <label className=' mb-2'>
                                            <input type="radio" />
                                            <span>Literary Fiction</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Philosophy</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Romance</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Mystery/Thriller</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Horror</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Auto/Biography</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Self-Help</span>
                                        </label>
                                        <label className='my-2'>
                                            <input type="radio" />
                                            <span>Politics</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='md:grid grid-cols-4'>

                                    <div className='p-3'>
                                        <div className='shadow p-3 rounded text-center'>
                                            <Link to={'/view/1/book'}>
                                                <img src="https://tse1.mm.bing.net/th/id/OIP.hUNBARsl5-RoOLD6hbhV2AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" style={{ height: '300px', width: '100%' }} />
                                            </Link>
                                            <h4 className='mt-3 text-blue-800'>Author</h4>
                                            <h4 className='font-bold'>RICH DAD POOR DAD</h4>
                                            <button className='bg-blue-600 p-1 w-full rounded text-white'>Buy-$13</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='min-h-screen flex justify-center items-center flex-col'>
                                <img src="https://img.freepik.com/premium-vector/locked-icon-isolated-white-background-vector-illustration_230920-1643.jpg?w=1380" alt="" style={{ height: '300px' }} />
                                <Link to={'/login'} className='text-blue-500'>please login</Link>

                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default AllBooks