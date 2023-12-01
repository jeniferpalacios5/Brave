import vectores from '/vectores-03.png'
import hamburgesa from "/hamburgesa-02.png"
import montanas from '/monatallas_principal-02.png'
  function Principal() {
    return (
      <>
        <section className="vh-100" style={{position: 'relative'}}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 p-5">
                <h1 className="d-flex justify-content-center text-black" style={{display: 'flex' , justifyContent: 'center'}}>PETE NOTAGE <br/>VOICE OVER</h1>
                <p className="d-flex justify-content-center" style={{display: 'flex' , justifyContent: 'center'}} >presenter / voiceover / northener</p>
              </div>
            </div>
          </div>
          <img src={vectores} alt="" className="img-fluid" style={{position: 'absolute' , bottom: '130px' , zIndex: '1' , maxWidth: '100%'}}/>
          <div className="aguas">
            <img src={montanas} alt="" style={{position: 'absolute' , bottom: '200px' , width: '100%'}}/>
            <div className="clara" style={{width:'100%' , height: '90px' , backgroundColor: '#4dbfd9' , position: 'absolute' , bottom: '110px'}}></div>
            <div className="oscura" style={{width: '100%' , height: '110px' , backgroundColor: '#1C91C0' , position: 'absolute' , bottom: '0'}}></div>
          </div>
        </section>
      </>
    );
  }
  export default Principal;

  // <div className="row">
  //           <header className="col-xs-12 fixed-top px-4 pt-4">
  //               <div className="d-flex justify-content-between" style={{display: 'flex' , justifyContent: 'space-between' , padding: '10px'}}>
  //                   <button className="hamburguesa" style={{width: '40px' , height: '40px' , backgroundColor: 'transparent', backgroundSize: 'cover', zIndex: '3', border: '1px solid green', backgroundImage: `url(${hamburgesa})` , borderRadius: '0'}}></button>
  //                   <button className="login fw-semibold" style={{fontSize: '16px' , color: 'green' , padding: '0 10px' , lineHeight: '35px', border: '4px solid green' , backgroundColor: 'transparent' , zIndex: '3' }}>Log in</button>
  //               </div>
  //           </header>
  //         </div>