import styled from 'styled-components';

export const Container = styled.button`
    background: transparent;
    padding: 1rem 2rem;
    margin: 1rem;
    border: 2px solid #F5679B;
    border-radius: 50px;

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
    }
`;
