import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading';
import Personaje from './Personaje';

const PintarDatos = ({nombrePersonaje}) => {
    
    const [personaje, setPersonaje] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        consumirApi(nombrePersonaje)
    }, [nombrePersonaje]);
    


    const consumirApi = async(nombre) => {
        setLoading(true)
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)

            if(!res.ok){
                return Swal.fire({
                    title: 'Error!',
                    text: 'Personaje invalido',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            }

            const datos = await res.json()
            setPersonaje(datos.results)
            console.log(datos.results)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return <Loading/>
    }


  return (
    <div className='row'>
        {
            personaje.map(item => (
                <Personaje key={item.id} personaje={item}/>
            ))
        }
    </div>
  )
}

export default PintarDatos