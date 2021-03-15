import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    padding: 3rem;
    margin: 1rem 2rem;
    background: rgb(44, 44, 68);
    border-radius: 15px;
    box-shadow: 0 10px 6px 0 rgb(26, 26, 36);

    .content {
        max-height: 61vh;
        background: inherit;
        overflow-y: scroll;
    }

    .content {
        &::-webkit-scrollbar {
            width: 6px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #F5679B;
            outline: none;
            border-radius: 15px;
        }
    }
`;
