import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { googleloginrAPI, loginrAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";





function Auth({ register }) {

  // const navigate=useNavigate()
  // const [togglePasswordType, setTogglePasswordType] = useState(false)

  // const formik = useFormik({
  //   initialValues: {
  //     username: '',
  //     email: '',
  //     password: ''
  //   },
  //   validationSchema: Yup.object({
  //     username: Yup.string().min(3, "Must be atleast three characters").required("Required"),
  //     email: Yup.string().email("Inavalid email").required("Required"),
  //     password: Yup.string().required("Required")
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //     if(register){
  //       handleRegister(values)
  //     }
  //     else{
  //       //login
  //     }

  //   }
  // })

  // const handleRegister=async(userData)=>{
  //   //import API call
  //   const result=await registerAPI(userData)

  //   if(result.status==200){
  //     toast.success("Registration successfull...please login")

  //   }
  //   else if(result.status==409){
  //     toast.error(result.response)

  //   }
  //   navigate('/login')
  const navigate = useNavigate()
  const [togglePasswordType, setTogglePasswordType] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: 'username',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must be atleast three characters").required("Required"),
      email: Yup.string().email("Inavalid email").required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (register) {
        handleRegister(values)
      }
      else {
        //login
        handleLogin(values)
      }
      resetForm()

    }
  })

  const handleLogin = async (userData) => {
    const result = await loginrAPI(userData)
    console.log(result);

    if (result.status == 200) {
      toast.success("login successfull")
      sessionStorage.setItem("user", JSON.stringify(result.data.user))
      sessionStorage.setItem("token", result.data.token)
      if (result.data.user.role == 'admin') {
        navigate('/admin-dashboard')
      }
      else {
        navigate('/')
      }
    }
    else {
      toast.error(result.response)
    }

  }

  const handleRegister = async (userData) => {

    //import API call
    const result = await registerAPI(userData)
    // console.log(result);

    if (result.status == 200) {

      toast.success("Registration sucessfull.. Please Login")

    } else if (result.status == 400) {

      toast.error(result.response)

    }
    navigate('/login')
  }
  const handleGoogleLogin = async (credentialResponse) => {
    console.log("inside google login");

    console.log(credentialResponse);
    const { name, email, picture } = jwtDecode(credentialResponse.credential)
    console.log(name, email, picture);

    const res = await googleloginrAPI({ username: name, email, password: "googlepassword", picture })
    console.log(res);

    if (res.status == 200) {
      toast.success('login successfull')
      sessionStorage.setItem("user", JSON.stringify(res.data.user))
      sessionStorage.setItem("token", res.data.token)
      setTimeout(() => {
        navigate('/')
      }, 2500);
    }


  }

  return (
    <div className='h-screen bg-[url("https://i.pinimg.com/1200x/81/59/e0/8159e00bf1b72ec93bce8e002d9edc72.jpg")] '>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-center my-10 text-3xl'>BOOKSTORE</h1>
        <form onSubmit={formik.handleSubmit} style={{ border: '2px solid black', borderRadius: '10px', backgroundColor: 'rgb(0,0,0,0.5)' }}>
          <div className='  flex flex-col justify-center text-white items-center p-5 ' >
            <div style={{ height: '100px', width: '100px', borderRadius: '50%', border: '2px solid white' }} className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} style={{ color: "rgb(255, 255, 255)", }} className='text-5xl' />
            </div>
            {register ? <h1 className='my-5'>Register</h1>
              :
              <h1 className='my-5'>Login</h1>
            }
            {register &&
              <div>
                <input onChange={formik.handleChange}
                  value={formik.values.username} name='username' type="text" placeholder='Username' className='bg-white placeholder-gray-600 my-3 w-100 rounded p-2 text-black' />
                <div className='text-yellow-400 mt-3'>{formik.errors.username}</div>
              </div>
            }
            <div>
              <input onChange={formik.handleChange}
                value={formik.values.email} name='email' type="email" placeholder='Email' className='bg-white placeholder-gray-600 my-3 w-100 rounded p-2 text-black' />
              <div className='text-yellow-400 mt-3'>{formik.errors.email}</div>
            </div>
            <div className="relative my-3 w-100">
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                type={togglePasswordType ? 'text' : 'password'}
                placeholder="Password"
                className="bg-white placeholder-gray-600 w-100 rounded p-2 text-black pe-5"
              />
              <div className='text-yellow-400 mt-3'>{formik.errors.password}</div>


              {
                togglePasswordType ?
                  <FontAwesomeIcon
                    onClick={() => setTogglePasswordType(false)}
                    icon={faEyeSlash}
                    className="text-gray-700 absolute"
                    style={{
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer'
                    }}
                  />
                  :
                  <FontAwesomeIcon
                    onClick={() => setTogglePasswordType(true)}
                    icon={faEye}
                    className="text-gray-700 absolute"
                    style={{
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer'
                    }}
                  />}
            </div>
          </div>
          <p className='text-orange-500 ps-5'>**Never share this password with others</p>
          <div className='p-5'>
            {register ? <button type='submit' className='bg-green-500 text-white w-100 rounded h-10 text-xl'>Register</button>
              :
              <button type='submit' className='bg-green-500 text-white w-100 rounded h-10 text-xl'>Login</button>
            }
          </div>

          {
            !register &&
            <div className='flex justify-center'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleGoogleLogin(credentialResponse)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          }
          {register ? <p className='text-white flex justify-center my-5'>Are You Already a User?<span className='text-blue-800 ms-2'><Link to={'/login'}> Login</Link></span></p>
            :
            <p className='text-white flex justify-center my-5'>Don't have an Account?<span className='text-blue-800 ms-2'><Link to={'/signup'}> Register</Link></span></p>
          }

        </form>


      </div>

      {/*toast container */}
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </div>
  )
}

export default Auth