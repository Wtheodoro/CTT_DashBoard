import styled from 'styled-components';

export const Container = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;

    width: 19rem;
    padding: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2B2535;
    text-align: center;
    border-radius: 15px;

    h1 {
        color: #F5679B;
        text-transform: uppercase;
    }

    input {
        background: transparent;
        display: block;
        margin: 1.2rem auto;
        text-align: center;
        border: 2px solid #3498DB;
        padding: 0.9rem 0.6rem;
        width: 12.5rem;
        outline: none;
        border-radius: 24px;
        transition: 0.25s;

        &:focus {
            width: 17.5rem;
            border-color: #F5679B;
        }
    }
    button {
            border: 0;
            background: none;
            display: block;
            margin: 1.2rem auto;
            text-align: center;
            border: 2px solid #2ECC71;
            color: #FFF;
            padding: 0.9rem 2.5rem;
            outline: none;
            border-radius: 24px;
            transition: 0.25s;
        
            &:hover {
                background: #F5679B;
                border: 2px solid #F5679B;
            }
        }
`;
