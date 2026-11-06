import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { BooksAPI, editBookStatusAPI, getUserAPI } from '../../services/allAPI'
import axiosInstance from '../../api/axiosinstance'




function Resource() {

  const [bookList, setBookList] = useState(true)
  const [userList, setUserList] = useState(false)
  const [allBooks, setAllBooks] = useState([])
  const [users, setUsers] = useState([])
  // console.log(allBooks);
  // console.log(users);

  const getBooks = async () => {
    const res = await BooksAPI()
    // console.log(res);
    setAllBooks(res.data)


  }

  const updateBookStatus = async (id) => {
    const res = await editBookStatusAPI(id)
    // console.log(res);
    if (res.status == 200) {
      getBooks()
    }

  }

  const getUsers = async () => {
    const res = await getUserAPI()
    // console.log(res);
    setUsers(res.data)

  }

  useEffect(() => {
    if (bookList) {
      getBooks()
    }
    else {
      getUsers()

    }

  }, [bookList,userList])
  return (
    <div>
      <AdminHeader />
      <div className='grid min-h-[calc(100vh-7rem)] grid-cols-1 bg-white md:grid-cols-5'>
        <div className='min-w-0 md:col-span-1'>
          <Sidebar />
        </div>
        <div className='my-3 min-w-0 md:col-span-4 md:my-5'>
          <div className='flex items-center justify-center'>
            <p onClick={() => { setBookList(true); setUserList(false); }} className={bookList ? 'cursor-pointer rounded border-x border-t border-gray-300 px-3 py-3 text-blue-800 sm:px-5' : 'mx-2 cursor-pointer px-2 py-3'}>Book List</p>
            <p onClick={() => { setBookList(false); setUserList(true); }} className={userList ? 'cursor-pointer rounded border-x border-t border-gray-300 px-3 py-3 text-blue-800 sm:px-5' : 'mx-2 cursor-pointer px-2 py-3'}>User List</p>
          </div>
          {
            bookList &&
            <div className='grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 sm:p-5 lg:grid-cols-3 xl:grid-cols-4'>


              {
                allBooks?.map(bk => (
                  <div key={bk?._id} className='min-w-0 p-1 sm:p-2'>
                    <div className='h-full rounded p-3 text-center shadow'>
                      <Link to={`/view/${bk?._id}/book`}>
                        <img src={bk?.imageUrl} alt={bk?.title || 'Book cover'} className='h-56 w-full object-contain sm:h-64 lg:h-72' />
                      </Link>
                      <h4 className='mt-3 break-words text-blue-800'>{bk?.author}</h4>
                      <h4 className='break-words font-bold'>{bk?.title}</h4>
                      {
                        bk?.status != 'Approved' ?
                          <button onClick={() => updateBookStatus(bk?._id)} className='mt-3 w-full rounded bg-blue-600 p-2 text-white'>Approve</button>
                          :
                          <img src="https://static.vecteezy.com/system/resources/previews/016/746/182/original/green-check-mark-icon-symbol-logo-in-a-circle-tick-symbol-green-color-illustration-free-vector.jpg" width={50} alt="" />
                      }
                    </div>
                  </div>
                ))
              }

            </div>
          }

          {
            userList &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {
                users?.length > 0 ?
                  users?.map(user => (
                    <div className='shadow rounded p-3 mx-4 bg-gray-200 m-2'>
                      <p className='text-red-700 font-bold text-lg'>ID:{user?._id}</p>
                      <img src={user?.picture == "" ? 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' : user?.picture?.startsWith('https://lh3.googleusercontent.com/') ? user?.picture : `${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`} width={'100px'} style={{ borderRadius: '50%' }} height={'100px'} alt="" />
                      <div className='flex flex-col text-lg ml-6'>
                        <p className='text-blue-800 font-bold'>{user?.username}</p>
                        <p>{user?.email}</p>
                      </div>

                    </div>
                  ))
                  :
                  <p className='text-red-700 text-center my-'>No user found</p>
              }

            </div>
          }
        </div>

      </div>



    </div>
  )
}

export default Resource