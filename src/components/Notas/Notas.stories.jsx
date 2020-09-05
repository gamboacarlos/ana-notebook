import React from 'react'
import Notas from '.'
import './../../styles.scss'
import Citas from '.'


export default{
    title: "Citas",
    component: Citas
}

export const CitasExample = () => (<Citas titulo="Prueba" fecha="22/03/2020" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />)