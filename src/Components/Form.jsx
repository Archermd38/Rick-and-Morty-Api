import React from 'react'
import { UseFormulario } from '../Hooks/UseFormulario'
import Swal from 'sweetalert2'

const Form = ({setNombrePersonaje}) => {

  const [inputs, handleChange, reset] = UseFormulario({
    nombre:''
  })

  const {nombre} = inputs
  
  const handleSubmit = e =>{
    e.preventDefault();

    if(!nombre.trim()){
      return Swal.fire({
        title: 'Error!',
        text: 'Escriba algo por favor ',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }



    setNombrePersonaje(nombre.trim().toLowerCase())

    reset();
  }

  return (

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='ingrese personaje'
            className='form-control mb-3'
            value={nombre}
            onChange={handleChange}
            name='nombre'
          />
          <button
            type='submit'
            className='btn btn-dark'
          >
            Buscar
          </button>
        </form>

  )
}

export default Form