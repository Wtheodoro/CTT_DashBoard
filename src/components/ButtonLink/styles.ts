import styled from 'styled-components';

export const Container = styled.button`
    background: transparent;
    padding: 1rem 0;
    margin: 1rem;
    border: 2px solid #F5679B;
    border-radius: 50px;
    transition: all 0.3s;

    &:hover {
        background: #F5679B;

        a {
            color: #FFF;
        }
    }

    a {
        color: #F5679B;
        text-decoration: none;
        font-size: 18px;
        padding: 1rem 2rem;
    }
`;
