import React from 'react'
import PropTypes from 'prop-types'

const Citas = ({ titulo, fecha, texto }) => {
    return (
        <div className="note" >
            <p>Titulo<span>{titulo}</span></p>
            <p>{fecha}</p>
            <p>Texto<span>{texto}</span></p>
            <button type="button" >X</button>
        </div>
    )
}

Citas.propTypes = {
    titulo: PropTypes.string,
    fecha: PropTypes.number,
    texto: PropTypes.string
}

export default Citas
