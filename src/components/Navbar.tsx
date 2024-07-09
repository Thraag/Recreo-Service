


function Navbar() {
  return (
    <div className="container-fluid mx-0 px-0">
      <div className="container px-0 align-items-center mt-3">
        <nav className="navbar navbar-expand-lg navbar-light mx-0 px-0 my-0 py-0">
          <a className="navbar-brand ml-2" href="#">
            <img src="path/to/your/logo.png" alt="Logo" style={{ height: '40px' }} /> {/* Ajusta el tamaño y la ruta del logo */}
          </a>
          <button className="navbar-toggler mb-3 ml-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-3 my-4">
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
