import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


function Settings() {
  return (
    <div>
      <AdminHeader />
      <div className='bg-white  grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='grid col-span-4'>
          <div className='flex justify-center py-10'>
            <h1 className='text-2xl font-bold'>Settings</h1>
          </div>
          <div className='md:grid grid-cols-2'>
            <div className='mx-5 my-10'>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laudantium, exercitationem eveniet culpa nihil ducimus ex aut blanditiis maiores officiis natus, possimus accusamus reiciendis ratione cum magnam quas provident quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae voluptas ratione laudantium, harum, delectus nulla minima nobis praesentium, quam debitis asperiores. Accusamus, fuga quo totam fugiat voluptates iure sequi!
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus dicta doloribus ad cum neque! Recusandae aperiam accusamus in illum molestiae, aliquid, nihil vero fugit incidunt dolorem dolores tenetur iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellendus fugit quaerat nisi sequi impedit cupiditate ab at est aliquid! Voluptatum iusto ipsa laboriosam nulla obcaecati itaque dolore minus sit.
              </p>
                          
            </div>
            <div className='bg-blue-300 p-3 mx-5 mb-10 rounded'>
                <div className='md:flex justify-center'>
                  <img src="https://static.vecteezy.com/system/resources/previews/019/879/198/original/user-icon-on-transparent-background-free-png.png" alt="" className='h-[100px] justify-center '/>
                                  
                </div>
                <div className='flex flex-col'>
                  <input type="text" placeholder='Username' className='bg-white my-2 rounded w-full p-2' />
                  <input type="text" placeholder='Password' className='bg-white my-2 rounded w-full p-2'/>
                  <input type="text" placeholder='Confirm password' className='bg-white my-2 rounded w-full p-2'/>
                  <div className='flex justify-end my-2'>
                    <button className='bg-yellow-400 p-2 rounded mx-2'>Reset</button>
                    <button className='bg-green-600 p-2 rounded'>Update</button>
                  </div>
                </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Settings