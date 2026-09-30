import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Auth({register}) {
  return (
    <div className='h-screen bg-[url("https://i.pinimg.com/1200x/81/59/e0/8159e00bf1b72ec93bce8e002d9edc72.jpg")] '>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-center my-10 text-3xl'>BOOKSTORE</h1>
        <div style={{border:'2px solid black',borderRadius:'10px',backgroundColor:'rgb(0,0,0,0.5)'}}>
          <div className='  flex flex-col justify-center text-white items-center p-5 ' >
            <div style={{ height: '100px', width: '100px', borderRadius: '50%', border: '2px solid white' }} className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} style={{ color: "rgb(255, 255, 255)", }} className='text-5xl' />
            </div>
            {register? <h1 className='my-5'>Register</h1>
            :
            <h1 className='my-5'>Login</h1>
            }
           {register && <input type="text" placeholder='Username' className='bg-white placeholder-gray-600 my-3 w-100 rounded p-2 text-black' />}
            <input type="email" placeholder='Email' className='bg-white placeholder-gray-600 my-3 w-100 rounded p-2 text-black' />
            <input type="password" placeholder='Password' className='bg-white placeholder-gray-600 my-3 w-100 rounded p-2 text-black' />
          </div>
          <p className='text-orange-500 ps-5'>**Never share this password with others</p>
          <div className='p-5'>
            {register? <button className='bg-green-500 text-white w-100 rounded h-10 text-xl'>Register</button>
            :
            <button className='bg-green-500 text-white w-100 rounded h-10 text-xl'>Login</button>
            }
          </div>
          {register? <p className='text-white flex justify-center my-5'>Are You Already a User?<span className='text-blue-800 ms-2'><Link to={'/login'}> Login</Link></span></p>
          :
          <p className='text-white flex justify-center my-5'>Don't have an Account?<span className='text-blue-800 ms-2'><Link to={'/signup'}> Register</Link></span></p>
          }

        </div>


      </div>

    </div>
  )
}

export default Auth