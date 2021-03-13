import React from 'react';
import { Container } from './styles';

interface CounterProps {
  children: number
  type: string
}

const Counter = (props:  CounterProps) => {
  const { children, type } = props
  return (
    <Container>
      <div className="box">
        {children}
      </div>
      <p>{type}</p>
    </Container>
  )
}

export default Counter;