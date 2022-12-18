import styled from 'styled-components';

export const Container = styled.section`
    background: white;
    display: flex;
    align-items: center;
    div {
        max-width: 1632px;
        margin: 0 auto;
        width: 85%;
        display: flex;
        .contact-social-container {
            width: fit-content;
            h2 {
                line-height: 1.2;
                display: flex;
                align-items: center;
                img {
                    margin: 0 10px;
                }
            }
            h5 {
                color: var(--bg-5);
                line-height: 1;
            }
            article {
                margin-top: 60px;
                ul {
                    list-style: none;
                    li {
                        padding: 10px 0;
                        display: flex;
                        align-items: center;
                        transition: 0.3s;
                        opacity: .6;
                        a {
                            margin-left: 20px;
                            text-decoration: none;
                            color: var(--bg-5);
                        }
                        &:hover {
                            opacity: 1;
                            transform: translateY(-3px);
                        }
                    }
                }
            }
        }
        .contact-form-container {
            flex: 1;
            padding-top: 70px;
            width: 50vw;
            form {
                margin: 0 auto;
                width: 37vw;
                max-width: 600px;
                div {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-column-gap: 20px;
                }
            }
        }
    }
    @media screen and ( max-width: 1140px ) {
        div {
            .contact-social-container  {
                h2 {
                    white-space: nowrap;
                }
            }
            .contact-form-container {
                width: 100%;
                form {
                    width: 100%;
                    max-width: none;
                    div {
                        display: block;
                    }
                }
            }
        }
    }
    @media screen and ( max-width: 1020px ) {
        div {
            align-items: center;
            flex-direction: column;
            .contact-social-container,
            .contact-form-container {
                width: 100%;
            }
            .contact-social-container {
                article {
                    display: none;
                }
            }
            .contact-form-container {
                form {
                    /* width: 100%; */
                    /* max-width: 535px; */
                }
            }
        }
    }
    @media screen and ( max-width: 768px ) {
        div {
            .contact-social-container  {
                h2 {
                    /* max-width: 230px; */
                    white-space: normal;
                    img {
                        display: none;
                    }
                }
                h5 {
                    display: none;
                }
            }
            .contact-form-container {
                padding-top: 20px;
                form {
                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
`;
