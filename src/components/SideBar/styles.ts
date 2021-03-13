import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #262626;
    /* z-index: 10; */

    a {
        text-decoration: none;
        color: #F5679B;
    }
    
    a + a {
        margin-top: 2rem;
    }
`;
