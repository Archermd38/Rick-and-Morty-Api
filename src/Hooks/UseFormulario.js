import { useState } from 'react'

export const UseFormulario = (initialState = {}) => {
    const [inputs, setInput] = useState(initialState)

    const handleChange = (e) =>{

        const {name, value, checked, type} = e.target;

        setInput((old) => ({
            ...old, 
            [name]: type === "checkbox" ? checked : value
        }))


    }

    const reset = () =>{
        setInput(initialState)
    }


  return [inputs, handleChange, reset]
}
