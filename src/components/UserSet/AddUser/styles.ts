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
    
    form {
        display: flex;
    }

    p {
        color: #FFF;
    }

    input {
        height:3rem;
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
        margin-left: 0.6rem;
    }

    label {
        display: flex;
        align-items: center;
        height: 3rem;
        color: #FFF;
        margin-right: 0.6rem;
        padding: 0.6rem;
        border-radius: 4px;
        background: linear-gradient(
            90deg,
            rgba(93, 12, 255, 1) 0%,
            rgba(155, 0, 250, 1) 100%
        );

    }

    button {
        height: 3rem;
        color: #FFF;
        padding: 0.6rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        background: linear-gradient(
            90deg,
            rgba(93, 12, 255, 1) 0%,
            rgba(155, 0 ,250 , 1) 100%
        )
    }

    .randomButton {
        svg {
            font-size: 2rem;
            color: #E2E2E2;
            cursor: pointer;
            transition: all 0.2s;
            margin-right: 1rem;

            &:hover {
                font-size: 3rem;
            }
        }
    }

    .errors {
        font-size: 0.9rem;
        color: #E2E2E2;
    }
`;
