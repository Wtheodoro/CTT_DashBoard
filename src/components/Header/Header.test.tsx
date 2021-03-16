import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Header from './index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Header test', () => {

    it('Does Header have logout button?', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const btn = screen.getByText('Logout')

        expect(btn).toBeVisible()
    })
})