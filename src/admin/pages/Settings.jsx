import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { adminEditAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'


function Settings() {

  const navigate=useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cpassword: ""
  })


  const [passwordMatch, setPasswordMatch] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserDetails({
      ...userDetails, [name]: value
    })
  }

  //check passwordmatching
  const checkPasswordMatch = (data) => {

    setUserDetails({
      ...userDetails, cpassword: data
    })
    setPasswordMatch(userDetails.password === data)
  }

  //reset form
  const handleReset = () => {
    setUserDetails({
      username: "",
      password: "",
      cpassword: ""
    })
    setPasswordMatch(true)
  }
  //update admin details
  const handleUpdate = async (e) => {
    e.preventDefault()

    try {
      const admin = JSON.parse(sessionStorage.getItem('user') || '{}')

      if (!admin._id) {
        alert('Admin session not found. Please log in again.')
        return
      }

      const reqBody = {
        username: userDetails.username.trim(),
        password: userDetails.password
      }

      const res = await adminEditAPI(admin._id, reqBody)

      if (res.status !== 200) {
        alert('Failed to update admin details')
        return
      }

      alert('Admin details updated successfully')
      handleReset()
      navigate('/login')

    }
    catch (error) {
      console.log(error);
      alert("Failed to update admin details")

    }

  }

  return (
    <div>
      <AdminHeader />
      <div className='grid min-h-[calc(100vh-7rem)] grid-cols-1 bg-white md:grid-cols-5'>
        <div className='min-w-0 md:col-span-1'>
          <Sidebar />
        </div>
        <div className='grid min-w-0 content-start md:col-span-4'>
          <div className='flex justify-center py-6 sm:py-10'>
            <h1 className='text-xl font-bold sm:text-2xl'>Settings</h1>
          </div>
          <div className='grid grid-cols-1 gap-4 px-4 pb-6 sm:px-6 lg:grid-cols-2 lg:gap-6'>
            <div className='my-2 lg:my-10'>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laudantium, exercitationem eveniet culpa nihil ducimus ex aut blanditiis maiores officiis natus, possimus accusamus reiciendis ratione cum magnam quas provident quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae voluptas ratione laudantium, harum, delectus nulla minima nobis praesentium, quam debitis asperiores. Accusamus, fuga quo totam fugiat voluptates iure sequi!
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus dicta doloribus ad cum neque! Recusandae aperiam accusamus in illum molestiae, aliquid, nihil vero fugit incidunt dolorem dolores tenetur iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellendus fugit quaerat nisi sequi impedit cupiditate ab at est aliquid! Voluptatum iusto ipsa laboriosam nulla obcaecati itaque dolore minus sit.
              </p>

            </div>
            <div className='mb-4 rounded bg-blue-300 p-4 sm:p-5 lg:mb-10'>
              <div className='flex justify-center'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/879/198/original/user-icon-on-transparent-background-free-png.png" alt="" className='h-20 w-20 object-contain sm:h-[100px] sm:w-[100px]' />

              </div>
              <form onSubmit={handleUpdate} className='flex flex-col'>
                <input name='username' value={userDetails.username} onChange={handleChange} type="text" placeholder='Username' className='my-2 w-full rounded bg-white p-2' />
                <input name='password' value={userDetails.password} onChange={handleChange} type="password" placeholder='Password' className='my-2 w-full rounded bg-white p-2' />
                <input name='cpassword' value={userDetails.cpassword} onChange={(e) => checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm password' className='my-2 w-full rounded bg-white p-2' />
                {!passwordMatch && (
                  <p className='text-red-600 text-sm'>
                    Passwords do not match
                  </p>
                )}
                <div className='flex justify-end my-2'>
                  <button type='button' className='bg-yellow-400 p-2 rounded mx-2' onClick={handleReset}>Reset</button>
                  <button type='submit' className='bg-green-600 p-2 rounded'>Update</button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Settings