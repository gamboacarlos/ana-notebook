import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Formulario from '.'


test('Input should work', () => {
    render(<Formulario />)
    userEvent.type(screen.getAllByRole('textbox')[0], 'Title of this')    
    userEvent.type(screen.getAllByRole('textbox')[1], 'Lorem ipsum {enter}Dolor')    
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('Title of this')    
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('Lorem ipsum \nDolor')
})