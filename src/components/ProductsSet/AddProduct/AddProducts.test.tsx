import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import AddProduct from './index'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import AllProducts from '../AllProducts'
import userEvent from '@testing-library/user-event'

describe('Test for add new product', () => {

    it('Shoul add new product on list when add product.', async () => {
        const addProduct = render(
        <Provider store={store}>
            <AddProduct />
            <AllProducts />
        </Provider>
            )
        // procurando os inputs
        const title = screen.getByPlaceholderText('Nome do produto')
        const description = screen.getByPlaceholderText('Descrição')
        const price = screen.getByPlaceholderText('Preço')
        const image = screen.getByPlaceholderText('Link da imagem')
        const list = screen.getByTestId('list-products')
        
        // atribuindo os inputs
        userEvent.type(title, 'Água mineral')
        userEvent.type(description, 'Bebida Essencial para  a vida')
        userEvent.type(price, '1.50')
        userEvent.type(image, 'image')

        // procurando e clicando no botão
        const btn = await waitFor(() => addProduct.getByText('Enviar'))
        fireEvent.click(btn)        
    })

})