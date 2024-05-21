import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout