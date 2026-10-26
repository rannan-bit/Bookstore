import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Preloader from './components/Preloader'
import AllBooks from './user/pages/AllBooks'
import Profile from './user/pages/Profile'
import ViewBook from './user/pages/ViewBook'
import Auth from './pages/Auth'
import Contact from './user/pages/Contact'
import Dashboard from './admin/pages/Dashboard'
import Resource from './admin/pages/Resource'
import Settings from './admin/pages/Settings'
import Pnf from './pages/Pnf'

function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      
    }, 5000);
  })

  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Preloader/>:<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/signup' element={<Auth register/>}/>
      <Route path='/all-books' element={<AllBooks/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/view/:id/book' element={<ViewBook/>}/>
      <Route path='/admin-dashboard' element={loading?<Preloader/>:<Dashboard/>}/>
      <Route path='/admin-resources' element={<Resource/>}/>
      <Route path='/admin-settings' element={<Settings/>}/>
      <Route path='/*' element={<Pnf/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
