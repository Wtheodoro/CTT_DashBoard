import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    padding: 1rem;
    margin: 1rem 2rem;
    background: rgb(44, 44, 68);
    border-radius: 15px;
    box-shadow: 0 10px 6px 0 rgb(26, 26, 36);
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: #FFF;
    }

    input {
        padding: 0.5rem 1.5rem 0.5rem 0.8rem;
        border-radius: 4px 0 0 4px;
        border: 2px solid #5D0CFF;
        outline: none;
        background: transparent;
        color: #FFF;

        &::placeholder {
            color: #E2E2E2;
        }
    }

    input + input {
        margin-left: 1rem;
    }

    button {
        padding: 0.6rem;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        outline: none;
        background: linear-gradient(
            90deg,
            rgba(93, 12 , 255, 1) 0%,
            rgba(155, 0, 250, 1) 100%
        )
    }

    .randomButton {
        svg {
            font-size: 3rem;
            color: #E2E2E2;
            cursor: pointer;
        }
    }
`;
