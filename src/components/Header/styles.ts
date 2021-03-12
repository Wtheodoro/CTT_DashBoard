import styled from 'styled-components';

export const Container = styled.div`
    height: 4rem;
    width: calc(100vw - 10rem);
    position: absolute;
    left: 10rem;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background: #262626;

    p {
        margin-right: 2rem;
        color: #F5679B;
    }
`;
