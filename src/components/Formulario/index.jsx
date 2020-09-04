import React from 'react'
import './../../styles.scss'

const Formulario = () => {
    return (
        <div>
            <form>
                <input
                type="text" 
                name="titulo" 
                placeholder="Titulo"
                />
                <input 
                type="date" 
                name="fecha"
                placeholder="Fecha"
                 />
                <textarea 
                name="texto" 
                placeholder="Texto" ></textarea>
                <button type="submit" className="guardar">Guardar</button>
            </form>
        </div>
    )
}
export default Formulario