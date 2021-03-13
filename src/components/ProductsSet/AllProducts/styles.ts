import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    padding: 3rem;
    margin: 1rem 2rem;
    background: rgb(44, 44, 68);
    border-radius: 15px;

    .content {
        max-height: 61vh;
        background: inherit;
        overflow-y: scroll;
    }
`;
