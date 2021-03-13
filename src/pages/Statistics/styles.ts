import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: linear-gradient(rgb(30, 30, 40), rgb(36, 30, 44));

    .flex-all {

        a, p {
            z-index: 11;
        }

        .flex {
            height: 91vh;
            display: flex;

            .content {
                position: relative;
                z-index: 10;
                width: 100%;
                display: flex;
                justify-content: center;
                margin-left: -10rem;

                .statistic-text {
                    color: #FFF;
                    position: absolute;
                    margin-top: 7rem;
                    font-size: 2.5rem;

                    strong {
                        color: #F5679B;
                    }
                }

                div + div {
                    margin-left: 3rem;
                }
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
