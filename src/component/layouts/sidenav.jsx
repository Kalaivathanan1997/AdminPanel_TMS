import React from 'react'
import { Link} from "react-router-dom";

function SideNav() {
  return (
   <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
     
      
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-open">
            <Link to="/" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
               
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/transaction" className="nav-link">
            <i className=" nav-icon fas fa-folder" ></i>
              <p>
              Transactions
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </Link>
          </li>  


        
          






            <li className="nav-item">
            <Link  to="/agent" className="nav-link ">
              <i className="nav-icon fas fa-users text-red" />
              <p>
              Agents
                
              </p>
            </Link>
          </li>
            <li className="nav-item">
            <Link  to="/moderator" className="nav-link">
              <i className="nav-icon fas fa-user-secret " />
              <p>
              Moderators
                
              </p>
            </Link>
          </li> 
          <li className="nav-item">
            <Link  to="/depositHistory" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
              Deposit History
                
              </p>
            </Link>
          </li>
    
     
    
       
          
       
   
      
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

  )
}

export default SideNav