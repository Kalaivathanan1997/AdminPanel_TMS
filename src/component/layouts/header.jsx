

function Header() {
  return (
  <div>
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>  
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
     <li className="nav-item dropdown d-flex  ">
  <a className="nav-link user-panel d-flex align-items-center  dropdown-toggle  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <div className="image ">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2 m-1 " alt="User Image" />
        </div>
  Alexander Pierce
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <a className="dropdown-item" href="#">FAQ</a>
    <a className="dropdown-item" href="#">Support</a>
    <div className="dropdown-divider" />
    <a className="dropdown-item" href="#">Contact</a>
  </div>
</li>




  









      
    </ul>
  </nav>
  {/* /.navbar */}
</div>

  );
}

export default Header