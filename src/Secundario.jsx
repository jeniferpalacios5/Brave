import React, { useState } from 'react';
import logo from '/logo-03.png';
import montanas from '/montanas-03.png';

const Parrafo = (props) => {
  const [contenidoParrafo, setContenidoParrafo] = useState(
    'Samuel es el creador y alma detrás de Hefesto, siendo responsable de la dirección general del proyecto. Se encarga de coordinar todas las actividades y asegurarse de que se cumplan los objetivos establecidos. Además, lidera el desarrollo del sitio web y la creación del cómic. lore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt assumenda sapiente qui quod tempora velit repellat veritatis culpa id officia nostrum eum a perferendis distinctio obcaecati suscipit, eveniet ab maxime?'
  );

  return (
    <>
      <section className="info-seccion" id="hefesto" style={{ height: '100vh', position: 'relative', padding: '250px 0 250px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <div className="col-12 info-efesto">
                  <h2>{props.title}</h2>
                  <p>{contenidoParrafo}</p>
                  <div className="row">
                    <div className="col-12 d-flex ">
                      <button
                        type="button"
                        className="btn btn-info me-4"
                        onClick={() => setContenidoParrafo('Hi Andres...')}
                        data-bs-toggle="modal"
                        data-bs-target="#modalHistory"
                      >
                        Historia
                      </button>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#modalObject"
                      >
                        Objetivo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={logo} alt="" className="logo-info" style={{ width: '300px' }} />
            </div>
          </div>
        </div>
        <img src={montanas} alt="" className="montanas" style={{ position: 'absolute', bottom: '0', width: '100%', height: '200px' }} />
      </section>
    </>
  );
};

export default Parrafo;
