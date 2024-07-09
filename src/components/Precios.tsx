


function Precios() {
  return (
    <div className="container-fluid mx-0">
      <div className="container px-0">
        <h2 className="text-center mb-5 text-black">Planes para todos los gustos</h2>
        <div className="row justify-content-sm-center">
          <div className="col-md-4 col-12 mb-4">
            <div className="card precio cardcolor1 text-black zoom-on-hover mx-auto mx-md-0">
              <div className="card-body d-flex flex-column">
                <p className="card-text text-left mb-3">Simple</p>
                <h5 className="card-title mb-3 h2 font-weight-bold">$10/Mensual</h5>
                <div className="separacionprecios">
                  <p>• Funciones básicas</p>
                  <p>• Corrector de código</p>
                  <p>• Avances mensuales</p>
                  <p>• Tutela parcial</p>
                </div>
                <div className="mt-auto">
                  <button className="btn btn-light btn-block">Ver más</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 col-12 mb-4">
            <div className="card precio cardcolor2 text-black zoom-on-hover mx-auto">
              <div className="card-body d-flex flex-column">
                <p className="card-text text-left mb-3">Plus</p>
                <h5 className="card-title mb-3 h2 font-weight-bold">$20/Mensual</h5>
                <div className="separacionprecios">
                  <p>• Funciones básicas</p>
                  <p>• Corrector de código</p>
                  <p>• Avances mensuales</p>
                  <p>• Tutela parcial</p>
                  <p>• Proyectos grupales</p>
                </div>
                <div className="mt-auto">
                  <button className="btn btn-light btn-block">Ver más</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 col-12 mb-4">
            <div className="card precio cardcolor3 text-black zoom-on-hover mx-auto mx-md-0 ms-md-auto">
              <div className="card-body d-flex flex-column">
                <p className="card-text text-left mb-3">Premium</p>
                <h5 className="card-title mb-3 h2 font-weight-bold">$30/Mensual</h5>
                <div className="separacionprecios">
                  <p>• Funciones básicas</p>
                  <p>• Corrector de código</p>
                  <p>• Avances mensuales</p>
                  <p>• Tutela proporcional</p>
                  <p>• Clases diarias</p>
                  <p>• Proyectos reales</p>
                </div>
                <div className="mt-auto">
                  <button className="btn btn-light btn-block">Ver más</button>
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
