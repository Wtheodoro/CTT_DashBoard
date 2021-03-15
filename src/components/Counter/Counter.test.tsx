import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Counter from './index'

describe('ButtonLink test', () => {

    it('Does ButtonLink have children?', () => {
        render(<Counter type="anos">{27}</Counter>)

        const box = screen.getByText('27')

        expect(box).toBeVisible()
        expect(box).toHaveTextContent('27')
    })

    it('Does ButtonLink have type?', () => {
        render(<Counter type="anos">{27}</Counter>)

        const type = screen.getByText('anos')

        expect(type).toBeVisible()
        expect(type).toHaveTextContent('anos')   
    })

})