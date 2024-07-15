
function Ventajas() {
  return (
    <div className="container-fluid py-5 mx-0 ventajascontainer">
      <div className="container px-0">
        <h2 className="text-center mb-5 tituloventajas">Tu aprendizaje sin límites</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 col-12 mb-4 d-flex">
            <div className="card cardcolorventajas1  zoom-on-hover w-100">
              <div className="card-body text-center d-flex flex-column">
                <img src="public\BOOK.png" alt=""  className="ventajasimagenes mx-auto"/>
                <h5 className="card-title">Código</h5>
                <p className="card-text flex-grow-1">
                  Escribe código optimizado con precisión y elegancia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 d-flex">
            <div className="card cardcolorventajas2 text-black zoom-on-hover w-100">
              <div className="card-body text-center d-flex flex-column">
                <img src="public\people.png" alt="" className="ventajasimagenes mx-auto" />
                <h5 className="card-title">Prácticas</h5>
                <p className="card-text flex-grow-1">
                  Aprende las prácticas más eficaces para tu carrera.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 d-flex">
            <div className="card cardcolorventajas3 text-black zoom-on-hover w-100">
              <div className="card-body text-center d-flex flex-column">
                <img src="public\time.png" alt="" className="ventajasimagenes mx-auto" />
                <h5 className="card-title">Compañerismo</h5>
                <p className="card-text flex-grow-1">
                  Desenvuélvete en un ambiente laboral que potenciará tu desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ventajas;
