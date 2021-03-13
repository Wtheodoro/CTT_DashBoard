import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box {
        color: #F5679B;
        padding: 3rem 1.5rem;
        font-size: 5rem;
        font-weight: 900;
        background: rgb(44, 44, 68);
        border-radius: 15px;
        box-shadow: 0 10px 6px 0 rgb(26, 26, 36);
    }

    p {
        margin-top: 2rem;
        color: rgb(121, 122, 153);
        font-size: 1.5rem;
    }
`;
