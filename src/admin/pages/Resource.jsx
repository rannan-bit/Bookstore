import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'




function Resource() {

  const [bookList, setBookList] = useState(true)
  const [userList, setUserList] = useState(false)
  return (
    <div>
      <AdminHeader />
      <div className='bg-white  grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='col-span-4 my-5'>
          <div className='flex justify-center items-center '>
            <p onClick={() => { setBookList(true); setUserList(false); }} className={bookList ? 'text-blue-800 p-3 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'mx-2'}>Book List</p>
            <p onClick={() => { setBookList(false); setUserList(true); }} className={userList ? 'text-blue-800 p-3 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'mx-2'}>User List</p>
          </div>
          {
            bookList &&
            <div className='md:grid grid-cols-4 m-5'>

              <div className='p-3'>
                <div className='shadow p-3 rounded text-center'>
                  <Link to={'/view/1/book'}>
                    <img src="https://tse1.mm.bing.net/th/id/OIP.hUNBARsl5-RoOLD6hbhV2AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" style={{ height: '300px', width: '100%' }} />
                  </Link>
                  <h4 className='mt-3 text-blue-800'>Author</h4>
                  <h4 className='font-bold'>RICH DAD POOR DAD</h4>
                  <button className='bg-blue-600 p-1 w-full rounded text-white'>Approve</button>
                </div>
              </div>
            </div>
          }

          {
            userList &&
            <div>
              
            </div>
          }
        </div>

      </div>



    </div>
  )
}

export default Resource