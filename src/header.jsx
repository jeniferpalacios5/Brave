import hamburgesa from "/hamburgesa-02.png" 
function Header() {
    return (
      <>
        <header className="col-xs-12 fixed-top px-4 pt-4">
            <div className="d-flex justify-content-between">
                <button className="hamburguesa" style={{width: '40px' , height: '40px' , backgroundColor: 'transparent', backgroundSize: 'cover', zIndex: '3', border: '1px solid green', backgroundImage: `url(${hamburgesa})` , borderRadius: '0'}}></button>
                <button className="login fw-semibold" style={{fontSize: '16px' , color: 'green' , padding: '0 10px' , lineHeight: '35px', border: '4px solid green' , backgroundColor: 'transparent' , zIndex: '3' }}>Log in</button>
            </div>
            <div className="d-none align-items-center justify-content-center bg-warning" style={{width: '100%' , height: '75px' , backgroundColor: '##091620a4' , gap: '20px', position: 'absolute' , top: '0' }}>
                <a href="#inicio" style={{fontSize: '14px' , color: 'white' , padding: '0 10px' , lineHeight: '35px' , border: '2px solid white' , backgroundColor: 'transparent' , zIndex: '2' }}>Inicio</a>
                <a href="#hefesto" style={{fontSize: '14px' , color: 'white' , padding: '0 10px' , lineHeight: '35px' , border: '2px solid white' , backgroundColor: 'transparent' , zIndex: '2' }}>Hefesto</a>
                <a href="#comic" style={{fontSize: '14px' , color: 'white' , padding: '0 10px' , lineHeight: '35px' , border: '2px solid white' , backgroundColor: 'transparent' , zIndex: '2' }}>Comic</a>  
                <a href="#contacto" style={{fontSize: '14px' , color: 'white' , padding: '0 10px' , lineHeight: '35px' , border: '2px solid white' , backgroundColor: 'transparent' , zIndex: '2' }}>Contacto</a>
            </div>
        </header>
      </>
    );
  }
  export default Header;