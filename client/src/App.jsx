import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import EventDetails from './pages/EventDetails.jsx'
import Favorite from './pages/Favorite.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {Toaster} from 'react-hot-toast'

const App = () => {
const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster />
    { !isAdminRoute && <Navbar /> }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
    {!isAdminRoute && <Footer />}
    </>
  )
}

export default App