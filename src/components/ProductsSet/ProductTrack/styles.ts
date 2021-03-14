import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;

    .track {
        width: 100%;
        display: flex;
        align-items: center;  
        position: relative;
        padding: 1rem;
        border-radius: 5px;

        background: linear-gradient(
            90deg,
            rgba(93, 12, 255, 0.5) 0%,
            rgba(155, 0, 250, 0.5) 100%
        );
        
        p {
            color: #FFF;
        }

        .id {
            font-size: 1.3rem;
        }

        .title, .price {
            margin-left: 1rem;
        }

        svg {
            position: absolute;
            right: 0;
            margin-right: 2rem;
            font-size: 2rem;
            color: #E2E2E2;
            cursor: pointer;
        }

        img {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        margin-left: 1rem;
        }
    }
`;
