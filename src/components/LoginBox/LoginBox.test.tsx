import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import LoginBox from './index'
import { Provider } from 'react-redux'
import { store } from '../../store'
import userEvent from '@testing-library/user-event'

describe('LoginBox test', () => {

    it('Does all inputs have what they must have?', () => {
        render(
            <Provider store={store}>
                <LoginBox />
            </Provider>
        )

        const test = 'Testando'

        const email = screen.getByPlaceholderText('E-mail')
        const password = screen.getByPlaceholderText('Senha')

        userEvent.type(email, test)
        userEvent.type(password, test)

        expect(email).toHaveValue(test)
        expect(password).toHaveValue(test)
    })
})