import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import SideBar from './index'
import { BrowserRouter } from 'react-router-dom'

describe('SideBar test', () => {

    it('Admin user should see link to users page', () => {
        localStorage.setItem('userRole', 'admin')
        render(
            <BrowserRouter>
                <SideBar/>
            </BrowserRouter>
        )

        const linkToUsers = screen.getByText('Usuários')

        expect(linkToUsers).toBeVisible()
    })
})