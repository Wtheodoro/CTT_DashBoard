import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import AddUser from './index'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import AllUsers from '../AllUsers'
import userEvent from '@testing-library/user-event'

describe('Testing the add user inputs', () => {

    it('Shoul all the inputs mus be working', async () => {

        const test = 'Testando123'
        const addProduct = render(
        <Provider store={store}>
            <AddUser />
            <AllUsers />
        </Provider>
            )
        const name = screen.getByPlaceholderText('Nome')
        const email = screen.getByPlaceholderText('E-mail')
        const password = screen.getByPlaceholderText('Senha')
        const rePassword = screen.getByPlaceholderText('Confirme a senha')
        
        userEvent.type(name, test)
        userEvent.type(email, test)
        userEvent.type(password, test)
        userEvent.type(rePassword, test)

        expect(name).toHaveValue(test)
        expect(email).toHaveValue(test)
        expect(password).toHaveValue(test)
        expect(rePassword).toHaveValue(test)
           
    })

})