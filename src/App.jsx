import React, {  useState } from 'react'
import Form from './Components/Form'
import PintarDatos from './Components/PintarDatos'

const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState('')

  /*
  useEffect(() => {
    if(localStorage.getItem('nombreApi')){
      setNombrePersonaje(JSON.parse(localStorage.getItem('nombreApi')))
    }
  }, [nombrePersonaje])
    */


  return (
    <div className='container'>
      <h1>Api Rick and Morty</h1>
      <Form setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  )
}

export default App