import React from 'react'
import Formulario from './components/Formulario'
import './styles.scss'

const App = () => {
  return (
    <>
    <h1 className="main-title">Ana's Notebook</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario /> 
          </div>
          <div className="one-half column">
          2
          </div>
        </div>
      </div>
    </>
  )
}

export default App
