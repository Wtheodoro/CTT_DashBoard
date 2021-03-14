import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;

    .track {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding : 1rem;
        border-radius: 5px;

        background: linear-gradient(
            90deg,
            rgba(93, 12, 255, 0.5) 0%,
            rgba(155, 0, 250, 0.5) 100%
        );

        p {
            color: #FFF;
            font-size: 1rem;
        }

        .left {
            display: flex;


            p + p {
                margin-left: 4rem;
            }
        }

        .right {
            display: flex;
            align-items: center;
            
            .role {
                padding: 0.4rem;
                border: 2px solid;
                border-radius: 25px;
                transition: all 0.3s;
            }

            .admin {
               background: #F5679B;
            }

            .editor {
                color: yellow;
                border-color: yellow;
            }

            svg {
                /* margin-right: -2rem; */
                font-size: 2rem;
                color: #E2E2E2;
                cursor: pointer;
                display: none;
            }
        }

        &:hover {
            .role {
                transform: translateX(-1.2rem);
            }
            svg {
                display: block;
            }
        }
    }

    
`;
