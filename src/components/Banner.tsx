

function Banner() {
  return (
    <div className="container-fluid bannercolor ">
      <div className="container ">
        <div className="proyecto row d-flex align-items-center ">
          <div className="col-md-6 d-flex flex-column justify-content-center p-md-0 ">
            <h1 className=" titulo">Hello!, We are recreo App</h1>
            <p className=" textobanner my-3">La mejor interfaz para facilitar tu trabajo como docente</p>
            <div className="d-flex justify-content-center justify-content-md-start my-4 ">
              <button className="btn btn-secondary bigbutton ">Registrate ahora!</button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center  ">
            <div className="imagen">
              <img 
                src="/1.png" 
                alt="Imagen Ejemplo" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;