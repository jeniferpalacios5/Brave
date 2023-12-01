import Principal from './brave.jsx'
import Secundario from './Secundario.jsx'
import Comic from './comic.jsx'
import Contacto from './Contacto.jsx'
import playa from '/playa-04.png'


function App() {
  return (
    <>  
      <Principal/>
      <Secundario title="Hefesto"/>
      <Comic/>
      <Contacto imagen={playa}/>
    </>
  )
}

export default App
