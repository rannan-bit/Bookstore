import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'


function ViewBook() {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <div>
            <UserHeader />
            <div className='m-5 border border-gray-900 rounded flex '>
                <div>
                    <img src="https://tse1.mm.bing.net/th/id/OIP.hUNBARsl5-RoOLD6hbhV2AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='p-5 h-[400px]' />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <h4 className='my-5 font-bold text-xl'>RICH DAD AND POOR DAD</h4>
                    <h4 className='text-blue-600 '>- Author</h4>
                    <div className='mt-10'>
                        <div className='md:grid grid-cols-3 '>
                            <div className='mx-30'>
                                <h4 className='font-bold'>Publisher:Warner Books</h4>
                                <h4 className='my-5 font-bold'>Category:	Personal finance</h4>
                            </div>
                            <div className='mx-30'>
                                <h4 className='font-bold'>Language:	English</h4>
                                <h4 className='my-5 font-bold'>Real Price:INR 800</h4>
                            </div>
                            <div className='mx-30'>
                                <h4 className='font-bold'>No.of pages:	336 or 207</h4>
                                <h4 className='my-5 font-bold'>ISBN:	0-446-67745-0</h4>
                            </div>

                        </div>
                        <div className='mx-30 text-justify my-5'>
                            <p className='font-bold'>
                                Rich Dad Poor Dad is a personal finance book by Robert Kiyosaki that draws on his experiences with two father figures: his biological father, the “Poor Dad,” and his best friend’s father, the “Rich Dad”. The book emphasizes the stark differences in mindset and approach to money between the two, illustrating how financial education and smart investing can lead to wealth, while conventional paths often leave individuals financially constrained
                            </p>
                        </div>
                        <div className='flex justify-end my-5'>
                            <button className='bg-blue-300 p-2 rounded'>
                                <FontAwesomeIcon icon={faBackward} />
                                <span>Back</span>
                            </button>
                            <button className='bg-green-300 p-2 rounded mx-5'>
                                Buy $ 13
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEye} className='m-2' onClick={() => setModalStatus(true)} />
                </div>

            </div>

            {/*modal */}
            {
                modalStatus &&

                <div className='relative z-10'>

                    <div className='bg-gray-500/75 inset-0 fixed '>
                        <div className='flex min-h-screen justify-center items-center'>
                            <div className='bg-white h-[500px] md:m-25 m-5'>
                                <div className='flex bg-black items-center justify-between text-white p-3'>
                                    <h3 className=''>Book Images</h3>
                                    <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />
                                </div>
                                <div className='bg-white p-5'>
                                    <p className='text-black'>
                                        <FontAwesomeIcon icon={faCamera} className='text-blue-700' />
                                        <span className='mx-3'> camera clicks of the books in the seller hands.</span>
                                    </p>
                                    <div className='md:flex flex-col items-center my-5'>
                                        <img src="" alt="" className='h-[200px] w-[200px]'/>
                                        <img src="" alt="" className='h-[200px] w-[200px]'/>
                                        <img src="" alt="" className='h-[200px] w-[200px]'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default ViewBook