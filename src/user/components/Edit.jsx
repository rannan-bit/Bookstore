import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../../api/axiosinstance'
import { toast } from 'react-toastify'
import { userUpdateAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'




function Edit() {
    const [modalStatus, setModalStatus] = useState(false)

    const [token, setToken] = useState("")
    const [userDp, setUserDp] = useState("")
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("")
    const [userBio, setUserBio] = useState("")
    const navigate=useNavigate()

    const [userDetails, setUserDetails] = useState({ _id: "", username: "", password: "", cpassword: "", picture: "", bio: "" })
    const [existingPicture, setExistingPicture] = useState("")

    const [preview, setPreview] = useState("")

    const [imageFile, setImageFile] = useState(false)

    const [passwordMatch, setPasswordMatch] = useState(false)
    console.log(existingPicture);
    

    const checkPasswordMatch = (data) => {
        setUserDetails({ ...userDetails, cpassword: data })
        userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
    }

    const handleFileUpload = (e) => {
        const imageFile = e.target.files[0]
        if (imageFile.type.startsWith("image/")) {
            setUserDetails({ ...userDetails, picture: e.target.files[0] })
            setPreview(URL.createObjectURL(e.target.files[0]))
            setImageFile(true)
        }
        else {
            setImageFile(false)
        }

    }

    const resetProfileForm = () => {
        let user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({ ...userDetails, _id: user._id, username: user.username, picture: "", password: "", cpassword: "", bio: user.bio })
        setExistingPicture(user.picture)

        setPreview("")
        setImageFile(false)
        setPasswordMatch(true)

    }


    const updateProfile = async () => {
        const { username, password, cpassword, bio } = userDetails
        if (!username, !bio) {
            toast.warning("fill the fields completely")
        }
        else if (password && cpassword) {
            if (passwordMatch) {
                const reqbody = new FormData()
                for (let key in userDetails) {
                    if (key != "picture") {
                        reqbody.append(key, userDetails[key])
                    }
                    else {
                        preview ? reqbody.append(key, userDetails[key]) : reqbody.append(key, existingPicture)
                    }
                }
                const result = await userUpdateAPI(userDetails._id, reqbody)
                console.log(result);
                if (result.status == 200) {
                    toast.success("profile updated successfully")
                    setModalStatus(false)
                    navigate('/login')
                }
            }

        }
        else {
            console.log("hellloo");
            
            const reqbody = new FormData()
            for (let key in userDetails) {
                if (key != "picture") {
                    reqbody.append(key, userDetails[key])
                }
                else {
                    preview ? reqbody.append(key, userDetails[key]) : reqbody.append(key, existingPicture)
                }
            }
            const result = await userUpdateAPI(userDetails._id, reqbody)
            console.log(result);
            if (result.status == 200) {
                toast.success("profile updated successfully")
                setModalStatus(false)
                navigate('/login')
            }
        }
    }



    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            let user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({ ...userDetails, _id: user._id, username: user.username, bio: user.bio })
            setExistingPicture(user.picture)
        }
    }, [])
    console.log(userDetails);
    console.log(existingPicture);


    return (
        <div>
            <button className='text-2xl text-blue-900' onClick={() => setModalStatus(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>

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
                                <div className='flex flex-col justify-center items-center my-10'>
                                    <input
                                        onChange={(e) => handleFileUpload(e)}
                                        type="file" className='hidden' id='userpic' />
                                    <label htmlFor="userpic">

                                        {
                                            existingPicture == "" ?
                                                <img src={preview ? preview : 'https://tse4.mm.bing.net/th/id/OIP.72ZHg4fRmZIz93Cdxpy-OQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'} alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                                                :
                                                existingPicture.startsWith('https://lh3.googleusercontent.com/') ?
                                                    <img src={preview ? preview : existingPicture} alt=""
                                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                                                    :
                                                    <img src={preview ? preview : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt=""
                                                        style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                                        }
                                    </label>
                                    <FontAwesomeIcon icon={faPen} className='bg-yellow-400 p-1 text-white' style={{ marginLeft: '60px', marginTop: '-25px' }} />
                                    {
                                        !imageFile &&
                                        <div className='text-red-400 p-1'>
                                            *Only uploads image file
                                        </div>}

                                </div>
                                <div className='flex flex-col p-3'>
                                    <input
                                        value={userDetails.username}
                                        onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                                        type="text" placeholder='Username' className='bg-white my-2 p-2 rounded' />
                                    <input
                                        value={userDetails.password}
                                        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                                        type="text" placeholder='Password' className='bg-white my-2 p-2 rounded' />
                                    <input
                                        value={userDetails.cpassword}
                                        onChange={(e) => checkPasswordMatch(e.target.value)}
                                        type="text" placeholder='Password' className='bg-white my-2 p-2 rounded' />
                                    {
                                        !passwordMatch &&
                                        <div className='text-red-400 text-sm mt-5'>
                                            *password and confirm password must be same
                                        </div>
                                    }
                                    <textarea
                                        value={userDetails.bio}
                                        onChange={(e) => setUserDetails({ ...userDetails, bio: e.target.value })}
                                        type="text" placeholder='Bookstore User' className='bg-white my-2 p-2 rounded' />
                                </div>
                                <div className='bg-white p-2 flex justify-end'>
                                    <button
                                        type='button'
                                        onClick={resetProfileForm}
                                        className='bg-gray-800 text-white p-1 rounded mx-2'>Reset</button>
                                    <button onClick={updateProfile} className='bg-blue-800 p-1 rounded text-white'>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Edit