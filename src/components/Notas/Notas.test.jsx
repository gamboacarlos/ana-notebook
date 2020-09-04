import React from 'react'
import Notas from '.'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test("Notas render", async () =>{
    const { findByText } = render(<Notas/>)
    const text = await findByText('Titulo')
    expect(text).toBeInTheDocument()
})