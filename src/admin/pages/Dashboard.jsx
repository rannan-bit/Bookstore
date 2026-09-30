import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'


function Dashboard() {
  return (
    <div>
      <AdminHeader />
      <div className='bg-white  grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar/>
        </div>
        <div className='grid col-4'>

        </div>
        
      </div>
    </div>
  )
}

export default Dashboard