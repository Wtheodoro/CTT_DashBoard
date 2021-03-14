import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    padding: 1rem 3rem;
    margin: 1rem 2rem;
    background: rgb(44, 44, 68);
    border-radius: 15px;
    box-shadow: 0 10px 6px 0 rgb(26, 26, 36);

    .content {
        max-height: 66vh;
        background: inherit;
        overflow-y: scroll;
    }
`;
