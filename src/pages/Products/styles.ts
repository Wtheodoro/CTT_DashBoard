import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: linear-gradient(rgb(30, 30, 40), rgb(36, 30, 44));

    .flex-all {

        a, p {
            z-index: 10;
        }

        .flex {
            height: 91vh;
            display: flex;

            .content {
                z-index: 10;
            }
        }
    }

    .hills {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .starts {
        position: absolute;
        top: 0;
        width: 100%;
    }
`;
