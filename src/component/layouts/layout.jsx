import React from 'react'
import Header from './header'
import SideNav from './sidenav'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">

    
    <div className="wrapper">
        <Header></Header>
        <SideNav></SideNav>
        <div className="content-wrapper">
        <Outlet/>

        </div>

     
        <Footer></Footer>
    </div>
    </div>
  )
}

export default Layout