import styled from 'styled-components';

export const Container = styled.section`
    background: var(--bg-1);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .about-container {
        height: 100%;
        max-width: 1632px;
        width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .container-img {
            margin-right: 20px;
            cursor: pointer;
            img {
                transition: .3s;
                max-width: 480px;
                max-height: 480px;
                width: 25vw;
                height: 25vw;
                min-width: 330px;
                min-height: 330px;
                border-radius: 5px;
                &:hover {
                    transform: translateY(-3px);
                }
            }
        }
        .container-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            max-height: 330px;
            .info-titulo {
                h2 {
                    color: var(--bg-4);
                    span {
                        color: var(--primary-main);
                    }
                }
                p {
                    margin: 20px 0 0;
                    font-size: 2rem;
                    max-width: 900px;
                    color: white;
                    font-weight: 300;
                }
            }
        }
    }
    @media screen and (max-width: 870px) {
        .about-container {
            .container-img {
                display: none;
            }
        }
    }
    @media screen and (max-width: 470px) {
        .about-container {
            .container-info {
                .info-titulo {
                    p {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 420px){
        .about-container {
            .container-info {
                max-height: none;
                height: auto;
                min-height: 70%;
                header {
                    margin-bottom: 20px;
                }
                footer {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
        }
    }
`;
