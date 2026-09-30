import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Profile() {
    const [sellBookStatus, setSellBokkStatus] = useState(true)
    const [bookStatus, setBookStatus] = useState(false)
    const [PurchaseHistory, setPurchaseHistory] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)

    return (
        <div>
            <UserHeader />
            <div>
                <div className='bg-blue-950 py-5 h-90 '>
                    <div className='md:m-10 h-[230px] w-[230px] '>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.72ZHg4fRmZIz93Cdxpy-OQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" style={{ borderRadius: '50%', height: '200px', width: '200px' }} className='mt-60' />
                    </div>

                </div>
                <div className='flex justify-between mx-10 mt-30'>
                    <h1 className='font-bold'>Username</h1>
                    <button className='bg-blue-900 text-white p-2' onClick={() => setModalStatus(true)}>Edit</button>
                </div>
                <p className='mx-10 text-justify my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab, temporibus incidunt, officia, dolorum veritatis nam vitae nihil pariatur quam error impedit voluptatum omnis. Asperiores dicta distinctio quasi nulla porro! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error facere rerum velit accusamus numquam tempore, ipsa dicta quis, autem voluptates omnis veritatis, sunt labore? Amet cupiditate reiciendis molestias rerum facere?</p>


                {/*tabs*/}

                <div className='flex justify-center items-center my-10'>
                    <p onClick={() => { setSellBokkStatus(true); setBookStatus(false); setPurchaseHistory(false) }} className={sellBookStatus ? 'text-blue-800 p-3 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'mx-2'}>Sell Book</p>
                    <p onClick={() => { setSellBokkStatus(false); setBookStatus(true); setPurchaseHistory(false) }} className={bookStatus ? 'text-blue-800 p-3 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'mx-2'}>Book Status</p>
                    <p onClick={() => { setSellBokkStatus(false); setBookStatus(false); setPurchaseHistory(true) }} className={PurchaseHistory ? 'text-blue-800 p-3 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'mx-2'} >Purchase History</p>
                </div>

                {
                    sellBookStatus &&
                    <div className='bg-gray-500 m-10 mb-40'>
                        <h1 className='text-center p-5 font-bold text-xl'>Book Details</h1>
                        <form className='md:grid grid-cols-2'>
                            <div className='p-3 flex flex-col'>
                                <input type="text" placeholder='Title' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Author' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='No of Pages' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Image URL' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Price' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Discount Price' className='bg-white my-4 mx-3 p-2 rounded' />

                            </div>
                            <div className='p-3 flex flex-col'>
                                <input type="text" placeholder='Publisher' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Lan' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='No of Pages' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Image URL' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input type="text" placeholder='Price' className='bg-white my-4 mx-3 p-2 rounded' />
                                <div className='flex justify-center items-center m-5'>
                                    <input type="file" id='img' className='hidden' multiple />
                                    <label htmlFor="img">
                                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" style={{ height: '100px', width: '100px' }} />
                                    </label>
                                </div>
                                <div className='flex justify-end m-3'>
                                    <button className='bg-gray-700 p-2 rounded mx-2'>RESET</button>
                                    <button className='bg-blue-600 p-2 rounded mx-2'>SUBMIT</button>
                                </div>

                            </div>

                        </form>

                    </div>}
            </div>

            {/*modal */}

            {
                modalStatus &&
                <div className='relative z-10'>

                    <div className='bg-gray-500/75 inset-0 fixed '>
                        <div className='flex min-h-screen justify-center items-center'>
                            <div className='bg-blue-400  md:mx-50 w-full'>
                                <div className='flex bg-black items-center justify-between text-white p-3'>
                                    <h1>Update Profile</h1>
                                    <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />
                                </div>
                                <div className='flex justify-center items-center my-10'>
                                    <img src="https://tse4.mm.bing.net/th/id/OIP.72ZHg4fRmZIz93Cdxpy-OQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                                </div>
                                <div className='flex flex-col p-3'>
                                    <input type="text" placeholder='Username' className='bg-white my-2 p-2 rounded' />
                                    <input type="text" placeholder='Password' className='bg-white my-2 p-2 rounded' />
                                    <input type="text" placeholder='Password' className='bg-white my-2 p-2 rounded' />
                                    <input type="text" placeholder='Bookstore User' className='bg-white my-2 p-2 rounded' />
                                </div>
                                <div className='bg-white p-2 flex justify-end'>
                                    <button className='bg-gray-800 text-white p-1 rounded mx-2'>Reset</button>
                                    <button className='bg-blue-800 p-1 rounded text-white'>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                bookStatus &&
                <div className='bg-gray-500/75 md:mx-40 p-5 rounded flex my-20'>
                    <div>
                        <h1 className='text-xl font-bold my-5'>RICH DAD AND POOR DAD</h1>
                        <h1 className='text-xl font-bold my-5'>Author</h1>
                        <h3 className='text-blue-600'>$14.99</h3>
                        <p className='text-justify my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, odit perspiciatis sequi rerum veniam voluptates nihil pariatur eum, itaque voluptatibus, blanditiis labore eius atque quibusdam deserunt quis error eveniet magnam.</p>

                        <div className='flex flex-col p-5'>
                            <img src="https://media.istockphoto.com/vectors/red-rubber-stamp-icon-on-transparent-background-vector-id851180540?k=20&m=851180540&s=612x612&w=0&h=pzXsrANYtP_gAE2qfH9jCd7rOoO7jbV-NqSdzWd4Q74=" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                            <img src="https://tse4.mm.bing.net/th/id/OIP.IdZ5DE_sZqAbSG7hs3Tn6wHaHa?r=0&w=900&h=900&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} className='mt-3' />
                        </div>
                    </div>
                    <div className='m-5'>
                        <img src="https://tse1.mm.bing.net/th/id/OIP.hUNBARsl5-RoOLD6hbhV2AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='h-[300px] w-[300px]' />
                        <div className='flex justify-end mt-3'>
                            <button className='bg-red-800 text-white p-2 rounded'>Delete</button>
                        </div>
                    </div>

                </div>
            }


            {
                PurchaseHistory &&
                <div className='bg-gray-500/75 md:mx-40 p-5 rounded flex my-20 justify-between'>
                    <div>
                        <h1 className='text-xl font-bold my-5'>RICH DAD AND POOR DAD</h1>
                        <h1 className='text-xl font-bold my-5'>Author</h1>
                        <h3 className='text-blue-600'>$14.99</h3>
                        <div className='flex flex-col p-5'>
                            <img src="https://media.istockphoto.com/id/833786480/vector/rubber-stamp-black-and-white-icon-set-on-transparent-background.jpg?s=612x612&w=0&k=20&c=KnlnCR1Y8N9ctwOzQ7vu3yq_uRbsZMW-VWGfgQdTO80=" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                        </div>
                    </div>
                    <div className='m-5 flex items-center'>
                        <img src="https://tse1.mm.bing.net/th/id/OIP.hUNBARsl5-RoOLD6hbhV2AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='h-[200px] w-[200px]' />
                        <div className='flex justify-end mt-3'>

                        </div>
                    </div>

                </div>
            }

        </div>
    )
}

export default Profile