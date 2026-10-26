import React, { useState, useEffect } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import axiosInstance from '../../api/axiosinstance'
import Edit from '../components/Edit'
import { toast } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI'



function Profile() {
    const [sellBookStatus, setSellBokkStatus] = useState(true)
    const [bookStatus, setBookStatus] = useState(false)
    const [PurchaseHistory, setPurchaseHistory] = useState(false)

    const [token, setToken] = useState("")
    const [userDp, setUserDp] = useState("")
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("")
    const [userBio, setUserBio] = useState("")


    const [bookDetails, setBookDetails] = useState({ title: "", author: "", pages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImages: [] })
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])

    console.log(bookDetails);
    console.log(preview);
    console.log(previewList);




    const handleFileUpload = (e) => {
        const imgFile = e.target.files[0]
        setBookDetails({ ...bookDetails, uploadImages: [...bookDetails?.uploadImages, imgFile] })
        const url = URL.createObjectURL(imgFile)
        setPreview(url)
        setPreviewList([...previewList, url])
    }

    const resetForm = () => {
        setBookDetails({ title: "", author: "", pages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImages: [] })
        setPreview("")
        setPreviewList([])
    }

    const handleAddBook = async () => {
        const { title, author, pages, imageUrl, price, discountPrice, abstract, publisher, isbn, language, category, uploadImages } = bookDetails
        if (!title && !author && !pages && !imageUrl && !price && !discountPrice && !abstract && !publisher && !isbn && !language && !category && uploadImages.length > 0) {
            toast.warning("fille the form completely")
        }
        else {
            const reqBody = new FormData()
            for (let key in bookDetails) {
                if (key != "uploadImages") {
                    reqBody.append(key, bookDetails[key])
                }
                else {
                    bookDetails.uploadImages.forEach(file => {
                        reqBody.append("uploadImages", file)

                    })
                }
            }
            const result = await addBookAPI(reqBody)
            console.log(result);
            if (result.status == 200) {
                toast.success("Book added successfully")
            }
            else{
                toast.error(result.response)
            }
            resetForm()

        }
    }



    useEffect(() => {
        if (sessionStorage.getItem("user") && sessionStorage.getItem("token")) {
            const userToken = sessionStorage.getItem("token")
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDp(user.picture)
            setUserName(user.username)
            setUserBio(user.bio)
            console.log(user);

        }
    }, [token])

    return (
        <div>
            <UserHeader />
            <div>
                <div className='bg-blue-950 py-5 h-90 '>
                    <div className='md:m-10 h-[230px] w-[230px] '>
                        <img src={userDp == "" ? 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' : userDp?.startsWith('https://lh3.googleusercontent.com/') ? userDp : `${axiosInstance.defaults.baseURL}/uploads/${userDp}`} alt="" style={{ borderRadius: '50%', height: '200px', width: '200px' }} className='mt-60' />
                    </div>

                </div>
                <div className='flex justify-between mx-10 mt-30'>
                    <h1 className='font-bold'>{userName}</h1>
                    <Edit />

                </div>
                <p className='mx-10 text-justify my-5'>{userBio == "" ? 'No user bio' : userBio}</p>


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
                                <input onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Title' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='No of Pages' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" placeholder='Image URL' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Price' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Price' className='bg-white my-4 mx-3 p-2 rounded' />

                            </div>
                            <div className='p-3 flex flex-col'>
                                <input onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='bg-white my-4 mx-3 p-2 rounded' />
                                <input onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" placeholder='Abstract' className='bg-white my-4 mx-3 p-2 rounded' />
                                <div className='flex justify-center items-center m-5'>
                                    <input onChange={(e) => handleFileUpload(e)} type="file" id='img' className='hidden' multiple />
                                    <label htmlFor="img">
                                        <img src={preview ? preview : "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="" style={{ height: '100px', width: '100px' }} />
                                    </label>
                                </div>
                                {/*display uploaded images */}
                                {
                                    preview &&
                                    <div className='flex justify-center items-center m-5'>
                                        <input onChange={(e) => handleFileUpload(e)} type="file" id='img' className='hidden' multiple />
                                        <label htmlFor="img">
                                            <div className='mb-3 flex items-center justify-center pt-5'>
                                                {
                                                    previewList?.map(url => {
                                                        <img src={url} className='mx-2' alt="" style={{ height: '70px', width: '70px' }} />
                                                    })
                                                }
                                            </div>

                                        </label>
                                        {
                                            previewList?.length < 3 &&
                                            <FontAwesomeIcon icon={faPlus} className='ms-5 text-3xl' />}
                                    </div>}
                                <div className='flex justify-end m-3'>
                                    <button className='bg-gray-700 p-2 rounded mx-2' onClick={resetForm}>RESET</button>
                                    <button className='bg-blue-600 p-2 rounded mx-2' onClick={handleAddBook}>SUBMIT</button>
                                </div>

                            </div>

                        </form>

                    </div>}
            </div>



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