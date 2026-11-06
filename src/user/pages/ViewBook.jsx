import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { getSingleBookAPI, paymentAPI } from '../../services/allAPI'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axiosInstance from '../../api/axiosinstance'


function ViewBook() {
    const [modalStatus, setModalStatus] = useState(false)
    const [bookDetails, setBookDetails] = useState()
    console.log(bookDetails);


    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        getBook()
    }, [])

    const getBook = async () => {
        const res = await getSingleBookAPI(id)
        console.log(res);
        if (res.status == 200) {
            setBookDetails(res.data)
        }

    }

    const makePayment = async () => {
        const res = await paymentAPI(id)
        console.log(res);
        if(res.status==200){
            const { checkoutURL }=res.data
            window.location.href=checkoutURL
        }
        
    }
    return (
        <div>
            <UserHeader />
            <div className='m-5 border border-gray-900 rounded flex '>
                <div>
                    <img src={bookDetails?.imageUrl} alt="" className='p-5 h-[400px]' />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <h4 className='my-5 font-bold text-xl'>{bookDetails?.title}</h4>
                    <h4 className='text-blue-600 '>- {bookDetails?.author}</h4>
                    <div className='mt-10'>
                        <div className='md:grid grid-cols-3 '>
                            <div className='mx-30'>
                                <h4 className='font-bold'>Publisher:{bookDetails?.publisher}</h4>
                                <h4 className='my-5 font-bold'>Category:	{bookDetails?.category}</h4>
                            </div>
                            <div className='mx-30'>
                                <h4 className='font-bold'>Language:	{bookDetails?.language}</h4>
                                <h4 className='my-5 font-bold'>Real Price:INR {bookDetails?.price}</h4>
                            </div>
                            <div className='mx-30'>
                                <h4 className='font-bold'>No.of pages:	{bookDetails?.pages}</h4>
                                <h4 className='my-5 font-bold'>ISBN:	{bookDetails?.isbn}</h4>
                            </div>

                        </div>
                        <div className='mx-30 text-justify my-5'>
                            <p className='font-bold'>
                                {bookDetails?.abstract}
                            </p>
                        </div>
                        <div className='flex justify-end my-5'>
                            <button className='bg-blue-300 p-2 rounded'>
                                <FontAwesomeIcon icon={faBackward} />
                                <span>Back</span>
                            </button>
                            <button onClick={()=>makePayment(id)} className='bg-green-300 p-2 rounded mx-5'>
                                Buy INR {bookDetails?.price}
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
                                    <div className='md:flex flex-col items-center my-5 h-100 overflow-y-auto gap-2'>
                                        {
                                            bookDetails?.uploadImages?.map(book => (
                                                <img src={`${axiosInstance.defaults.baseURL}/uploads/${book}`} alt="" height={'300px'} width={'250px'} className='h-auto max-h-72 w-full max-w-[250px] rounded object-contain' />
                                            ))
                                        }
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