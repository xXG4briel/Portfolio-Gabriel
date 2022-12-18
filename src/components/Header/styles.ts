import styled from 'styled-components';

export const Container = styled.header`
    height: 70px;
    background: white;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2;
    width: 100%;    
    nav {
        max-width: 678px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .nav-list {
            width: 100%;
            list-style: none;
            display: flex;
            justify-content: space-between;
            li {
                letter-spacing: 3px;
                margin-left: 32px;
                opacity: .7;
                transition: .3s;
                a {
                    font-family: 'Roboto', sans-serif ;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    color: #686868;
                    text-decoration: none;
                }
                &:hover {
                    opacity: 1;
                    transform: translateY(-3px);
                }
            }
            .active {
                opacity: 1;
                a{
                    position: relative;
                    &:after {
                        content: "";
                        width: 4px;
                        height: 4px;
                        background: #686868;
                        border-radius: 50%;
                        position: absolute;
                        left: 50%;
                        bottom: -8px;
                    }
                }
            }
        }
        .mobile-menu {
            position: relative;
            display: none;
            cursor: pointer;
            div {
                width: 32px;
                height: 2px;
                background: #000;
                margin: 8px;
                transition: 0.3s;
            }
            &:before {
              position: absolute;
              font-size: 20px;
              left: -50px;
              top: 8px;
              content: "Menu" ;
              color: #000;
              height: auto;
              width: auto;
            } 
        }
    }
    &::after {
        content: " ";
        position: absolute;
        max-width: 1536px;
        bottom: -2px;
        height: 2px;
        width: 80vw;
        margin: 0 auto;
        background: #D9D9D9;
    }

    @media screen and (max-width: 850px) {
        nav {
            justify-content: flex-end;
            .nav-list {
                position: absolute;
                z-index: 1;
                top: 8vh;
                right: 0;
                width: 100vw;
                height: 92vh;
                background: #fff;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                transform: translateX(100%);
                transition: transform 0.3s ease-in;
                li {
                    margin-left: 0;
                    opacity: 0;
                }
            }
            .nav-list.activate {
                transform: translateX(0);
                li:nth-child(1) {
                    animation: navLinkFade 0.5s ease forwards 0.2s;
                }
                li:nth-child(2) {
                    animation: navLinkFade 0.5s ease forwards 0.4s;
                }
                li:nth-child(3) {
                    animation: navLinkFade 0.5s ease forwards 0.6s;
                }
                li:nth-child(4) {
                    animation: navLinkFade 0.5s ease forwards 0.8s;
                }
                li:nth-child(5) {
                    animation: navLinkFade 0.5s ease forwards 1s;
                }
            }
            .mobile-menu {
                display: block;
            }
            .mobile-menu.active {
                .line1 {
                    transform: rotate(-45deg) translate(-8px, 8px);
                }
                .line2 {
                    opacity: 0;
                }
                .line3 {
                    transform: rotate(45deg) translate(-5px, -7px);
                }
                /* .line1.activate {
                } */
            } 
        
        
        }
        &::after {
            display: none;
        }
    }
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

`;
