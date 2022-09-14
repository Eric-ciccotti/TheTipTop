import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <><NavBar /><Outlet /><Footer /></>
    )
}

export default Layout