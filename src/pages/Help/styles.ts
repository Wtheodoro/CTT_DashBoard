import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: linear-gradient(rgb(30, 30, 40), rgb(36, 30, 44));
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;

    .content {
        z-index: 10;
        width: 40rem;

        p {
            margin-top: 1rem;
        }

        strong {
            color: #F5679B;
        }

        svg {
            font-size: 8rem;
            margin-left: 16rem;
        }

        button {
            margin-left: 16rem;
        }
    }

    .hills {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .starts {
        position: absolute;
        width: 100%;
    }
`;
