
function Precios() {
  return (
    <div className="container-fluid mx-0 mb-5 pb-5 precioscontainer mt-5">
      <div className="container px-0">
        <h2 className="text-center mb-5 tituloprecios">Planes para todos los gustos</h2>
        <div className="row justify-content-sm-center">
          <div className="col-md-4 col-12 mb-4">
            <div className="card  cardcolor1 text-black zoom-on-hover mx-auto mx-md-0">
              <div className="card-body d-flex flex-column">
                <p className="card-text text-left mb-3">Simple</p>
                <h5 className="card-title mb-3 h2 font-weight-bold titulomensualidad">$10/Mensual</h5>
                <div className="separacionprecios">
                  <p> <i className="fa-solid fa-circle-check"> </i>Funciones básicas</p>
                  <p><i className="fa-solid fa-circle-check"> </i>Corrector de código</p>
                  <p><i className="fa-solid fa-circle-check"> </i>Avances mensuales</p>
                  <p><i className="fa-solid fa-circle-check"> </i>Tutela parcial</p>
                </div>
                <div className="mt-auto">
                  <button className="btn btn-light btn-block w-100 bg-dark border-0 text-white">Ver más</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 col-12 mb-4">
            <div className="card cardcolor2 text-black zoom-on-hover mx-auto">
              <div className="card-body d-flex flex-column">
                <p className="card-text text-left mb-3">Plus</p>
                <h5 className="card-title mb-3 h2 font-weight-bold titulomensualidad">$20/Mensual</h5>
                <div className="separacionprecios">
                  <p><i className="fa-solid fa-circle-check"> </i> Funciones básicas</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Corrector de código</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Avances mensuales</p>
                  <p><i className="fa-solid fa-circle-check"> </i>Tutela parcial</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Proyectos grupales</p>
                </div>
                <div className="mt-auto">
                  <button className="btn btn-light btn-block w-100 bg-dark border-0 text-white">Ver más</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 col-12 mb-4">
            <div className="card  cardcolor3 text-black zoom-on-hover mx-auto mx-md-0 ms-md-auto">
              <div className="card-body d-flex flex-column">
                <p className="card-text text-left mb-3">Premium</p>
                <h5 className="card-title mb-3 h2 font-weight-bold titulomensualidad">$30/Mensual</h5>
                <div className="separacionprecios">
                  <p><i className="fa-solid fa-circle-check"> </i> Funciones básicas</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Corrector de código</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Avances mensuales</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Tutela proporcional</p>
                  <p><i className="fa-solid fa-circle-check"> </i>Clases diarias</p>
                  <p><i className="fa-solid fa-circle-check"> </i> Proyectos reales</p>
                </div>
                <div className="mt-auto ">
                  <button className="btn btn-light btn-block w-100 bg-dark border-0 text-white">Ver más</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Precios;
