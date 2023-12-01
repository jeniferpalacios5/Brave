

function Contacto(props) {
    return (
      <>
        <section className="cont-seccion d-flex justify-content-center z-3" id="contacto" style={{backgroundColor: '#72C2EA' , height: '100vh' , position: 'relative' , display: 'flex'}}>
            <div className="aguaPlaya" style={{width: '100%' , height: '300px' , backgroundColor: '#0B7CB5' , position: 'absolute' , bottom: '0' , zIndex: '1'}}>
                <img src={props.imagen} alt="" className="playa" style={{width: '100%' , marginTop: '208px'}}/>
            </div>
            <div className="contact container rounded" style={{background: '#A9E7FF' , position: 'absolute' , bottom: '236px' , zIndex: '2' }}>
                <div className="row">
                    <div className="text col-md-6 col-sm-12 ps-5" style={{marginTop: '70px'}}>
                        <h3>Contáctanos</h3>
                        <p>Tel: (+57)000-000-00-00 <br/> Email: selorobaron@gmail.com</p>
                    </div>
                    <div className="formulario col-md-6 col-sm-12 mt-5 pe-5 d-flex-column">
                        <form action="">
                            <div className="pb-2">
                                <input type="text" className="form-control" id="nameInput" placeholder="Name"/>
                            </div>
                            <div className="pb-2">
                                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
                            </div>
                            <div className="pb-2">
                                <textarea className="form-control" id="messageInput" rows="3"
                                    placeholder="Mensaje"></textarea>
                            </div>
                            <div className="pb-5">
                                <div id="alertEnviar"></div>
                                <button type="button" className="btn btn-primary" id="enviarAlert">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  export default Contacto;