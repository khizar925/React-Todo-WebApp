import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div style={{height: "100vh"}}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
