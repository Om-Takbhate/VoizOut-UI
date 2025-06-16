import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <NewsLetter />
    </div>
  )
}

export default Body