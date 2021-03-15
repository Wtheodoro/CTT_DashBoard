import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Instructions from './index'
import { BrowserRouter } from 'react-router-dom'

describe('Instructions test', () => {

    it('Does Instructions have the user name?', () => {
        render(<Instructions name={'Chris Brown'}/>)

        const name = screen.getByText('Chris Brown')

        expect(name).toHaveTextContent('Chris Brown')
    })

    it('Does Instructions have the user role?', () => {
        render(<Instructions role={'admin'}/>)

        const role = screen.getByText('admin')

        expect(role).toHaveTextContent('admin')
    })

})