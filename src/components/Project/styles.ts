import styled from "styled-components";

export const Container = styled.section`
    background: white;
    .project-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 40px;
        .swiper {
            width: 100%;
        }
        h1 {
            text-align: center;
        }
        article {
            width: 100%;
        }
        h2 {
            margin:0 0 40px;
            span {
                color: var(--primary-main);
            }
        }
        .project-card-container {
            width: calc(100% - 25% );
            margin-left: 25%;
            .project-card {
                padding: 40px;
                background: var(--bg-6);
                border-radius: 16px;
                height: 43vh;
                width: 63vw;
                max-width: 960px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap: 20px;
                aside {
                    width: 100%;
                }
                .project-img-container {
                    display: flex;
                    div {
                        width: 100%;
                        height: 100%;
                        /* background: linear-gradient(
                            rgba(255, 255, 255, 0.1),
                            rgba(0, 0, 0, .5)
                        ); */
                        background: white;
                        
                    }
                    
                }
                .project-info-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
        
                }
            }
        }
    }
    @media screen and (max-width: 992px) {
        .project-container{
            padding-bottom: 0px;
            .project-card-container {
                width: 85%;
                margin-left: 0;
                .project-card {
                    background: transparent;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .project-img-container {
                        flex: 1;
                        div {
                            border-radius: 8px 8px 0 0 ;
                        }
                    }
                    .project-info-container {
                        background: var(--bg-6);
                        border-radius: 0 0 8px 8px;
                        padding: 8px;
                        h4 {
                            font-size: 24px;
                        }
                        p {
                            font-size: 20px;
                        }
                        button {
                            max-width: 240px;
                            /* margin: 0 auto; */
                        }
                    }
                }
            }
        }
    }
`;