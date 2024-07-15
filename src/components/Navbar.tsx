
  function Navbar() {
    return (
      <div className="container-fluid mx-0 px-0 my-0 ">
        <div className="container px-0 align-items-center ">
          <nav className="navbar navbar-expand-lg navbar-light mx-0 px-0 my-0 py-0 my-2">
            <a className="navbar-brand ml-2 " href="#">
              <img className="" src="/LOGO.png" alt="Logo" style={{ height: '53px' }} />
            </a>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link text-black textobanner" href="#">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black textobanner" href="#">Ventajas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black textobanner" href="#">Precios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black textobanner" href="#">Registrar</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  export default Navbar;
