import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    margin-top: 1rem;

    .track {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin: 0.5rem;
    }

    button {
        position: absolute;
        right: 0;
        margin-right: 2rem;
    }
`;
