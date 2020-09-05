import React, { useState } from 'react'
import './../../styles.scss'
import uuid from 'uuid/dist/v4'

const Formulario = ({ crearNota }) => {

    const [notas, setNotas] = useState({
        titulo: '',
        fecha: '',
        texto: ''
    })

    const [error, setError] = useState(false)

    const handleChange = (evt) => {
        setNotas({
            ...notas,
            [evt.target.name] : evt.target.value
        })
    }

    const agregarNota = (evt) => {
        evt.preventDefault()
        
        if(!titulo || !fecha || !texto){
            setError(true)
        }else{
            setError(false)
            notas.id = uuid()
            crearNota(notas)

        }
        setNotas({
            titulo: '',
            fecha: '',
            texto: ''
        })
    }

    const { titulo, fecha, texto } = notas

    return (
        <div>
            <div className="error">
            {
                error
                ?<h4>Olvidaste completar algo Ana!</h4>
                :null
            }
            </div>
            <form onSubmit={agregarNota} >
                <input
                type="text" 
                name="titulo" 
                placeholder="Titulo"
                onChange={handleChange}
                value={titulo}
                />
                <input 
                type="date" 
                name="fecha"
                placeholder="Fecha"
                onChange={handleChange}
                value={fecha}
                 />
                <textarea 
                name="texto"
                onChange={handleChange}
                value={texto} 
                placeholder="Texto" ></textarea>
                <button type="submit" 
                className="guardar">Guardar</button>
            </form>
        </div>
    )
}
export default Formulario