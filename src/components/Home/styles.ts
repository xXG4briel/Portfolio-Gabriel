import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-size: 4rem;
        line-height: 1;
    }
    .name {
        color: #118DFF;
    }
    .Typewriter {
        max-width: 595px;
        text-align: center;
        color: black;
    }
    @media screen and (max-width: 850px) {
        .Typewriter {
            max-width: 405px
        }
    }
    @media screen and (max-width: 540px) {
        .Typewriter {
            max-width: 300px
        }
        span {
            font-size: 3rem;
        }
    }
`;
