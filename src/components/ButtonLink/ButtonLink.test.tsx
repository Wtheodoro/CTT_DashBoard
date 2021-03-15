import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ButtonLink from './index'

describe('ButtonLink test', () => {

    it('Does ButtonLink have children?', () => {
        render(
        <BrowserRouter>
            <ButtonLink linkTo="/users">Usuários</ButtonLink>
        </BrowserRouter>
        )

        const btnLink = screen.getByText('Usuários')

        expect(btnLink).toBeVisible()
    })

})