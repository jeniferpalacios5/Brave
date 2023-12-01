
function Comic() {
    return (
      <>
      <section class="info-seccion" id="comic">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="row">
                            <div class="col-12 info-efesto">
                                <h2>Comic</h2>
                                <p>En "Espinas de Fortaleza", sigue la vida de Ana,
                                    una joven con espina bifida, quien enfrenta desafios
                                    y obstáculos con valentia y determinación. A través
                                    de su pasión por el arte y el amor de su familia, Ana
                                    encuentra la fuerza para superar las limitaciones fisicas.
                                    El comic también destaca la importancia de la inclusión y
                                    la empatia, mientras Ana busca educar y concientizar sobre la
                                    espina bifida. Su historia es un testimonio de resiliencia que
                                    inspirará a los lectores a enfrentar sus propios desafios con
                                    esperanza y coraje.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <ul class="nav nav-pills d-flex justify-content-center" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true">Hefesto</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false">Escenarios</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-contact" type="button" role="tab"
                                    aria-controls="pills-contact" aria-selected="false">Contact</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                aria-labelledby="pills-home-tab" tabindex="0">
                                <div class="d-flex justify-content-center align-items-center flex-column p-4">
                                    <p class="text-center">logo del proyecto, por medio de este logo se refelja la
                                        espina y
                                        la silueta de un ser humano representando la condición de espina bífida.</p>
                                    <img src="img/logo-03.png" alt="" style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab" tabindex="0">
                                <div class="d-flex justify-content-center align-items-center flex-column p-4">
                                    <p>Los personajes fueron basados en estilo grafico "flet desing"</p>
                                    <img src="img/personajes_Mesa de trabajo 1.png" alt="" style={{width:'300px'}}/>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                aria-labelledby="pills-contact-tab" tabindex="0">
                                <div class="d-flex justify-content-center align-items-center flex-column p-4">
                                    <p>Los escenarios fueron basados en estilo grafico "flet desing</p>
                                    <img src="img/escenario - copia-03.png" alt="" width="400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="img/montanas-03.png" alt="" class="montanas"/>
        </section>
      </>
    );
  }
  export default Comic;