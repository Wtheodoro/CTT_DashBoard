import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Header from './index'
import { BrowserRouter } from 'react-router-dom'

describe('Header test', () => {

    it('Does Header have logout button?', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const btn = screen.getByText('Logout')

        expect(btn).toBeVisible()
    })
})