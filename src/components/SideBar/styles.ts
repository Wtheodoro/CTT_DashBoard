import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 10rem;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    a + a {
        margin-top: 2rem;
    }
`;
