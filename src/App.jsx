import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import './styles.scss'
import Notas from './components/Notas'

const App = () => {

  
  let notaInicial = JSON.parse(localStorage.getItem('listaNotas'))
  if (!notaInicial) {
    notaInicial = []
  }
  
  const [listaNotas, setListaNotas] = useState(notaInicial)

  useEffect(() => {
    if (notaInicial) {
      localStorage.setItem('listaNotas', JSON.stringify(listaNotas))
    }else{
      localStorage.setItem('listaNotas', JSON.parse([]))
    }
  }, [listaNotas, notaInicial])

  const crearNota = (notas) =>{
    setListaNotas ([
      ...listaNotas,
      notas
    ])
  }

  const eliminar = (id) => {
    const nota = listaNotas.filter((lista) => lista.id !== id)
    setListaNotas(nota)
  }

  return (
    <>
    <h1 className="main-title">Ana's Notebook</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <Formulario 
          crearNota={crearNota}
          /> 
          </div>
          <div className="one-half column">
          {
            listaNotas.map((lista) => (
              <Notas 
              {...lista}
              eliminar={eliminar}
              key={lista.id}           
              />
            ))
          }
          </div>
        </div>
      </div>
      {/* <div className="row">
      <footer><p>Hecho con <span>❤</span> para la mujer mas hermosa del mundo.</p></footer>
      </div> */}
    </>
  )
}

export default App
