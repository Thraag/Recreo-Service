

function Banner() {
  return (
    <div className="container-fluid bannercontainer py-3">
      <div className="container bannercontainernofluid  ">
        <div className="row d-flex align-items-center ">
          <div className="col-md-6 d-flex flex-column justify-content-center p-md-0 ">
            <h1 className=" titulo">Tu trabajo como docente, como nunca antes.</h1>
            <p className=" textobanner my-3">La mejor interfaz para facilitar tu trabajo, ahorrar tiempo y esfuerzo, en un solo lugar.</p>
            <div className="d-flex justify-content-center justify-content-md-start my-4 ">
              <button className="bigbutton  btn btn-secondary  ">Registrate ahora!</button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center  ">
            <div className="imagen py-md-5 ml-auto">
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