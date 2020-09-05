import React from "react";
import PropTypes from "prop-types";

const Notas = ({ id, titulo, fecha, texto, eliminar }) => {
  return (
    <div className="list">
      <div className="note">
        <button type="button" onClick={() => eliminar(id)}>
          X
        </button>
        <h3>{titulo}</h3>
        <p>
          <span>{texto}</span>
        </p>
        <div className="bottom-note">
          <span>{fecha}</span>
        </div>
      </div>
    </div>
  );
};

Notas.propTypes = {
  titulo: PropTypes.string,
  fecha: PropTypes.number,
  texto: PropTypes.string,
};

export default Notas;
