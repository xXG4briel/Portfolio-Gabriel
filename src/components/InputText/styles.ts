import styled from 'styled-components';

export const Container = styled.fieldset`
    border: none;
    margin-bottom: 20px;
    label {
        font-size: 1rem;
        font-weight: 700;
    }
    label, input, textarea {
        font-family: "Poppins", sans-serif;
    }
    input, textarea {
        width: 100%;
        font-size: 1rem;
        padding: 8px;
        margin: 8px 0 0;
        display: block;
        outline: none;
        border: 2px solid #CDCDCD;
        border-radius: 5px;
        transition: .4s;
        &:hover {
            border-color: var(--primary-main);
        }
        &:focus {
            border-color: var(--primary-contrast);
        }
        &:invalid {
            border-color: #ff0000;
            color: #ff0000;
            animation: shakeInvalid .4s;
        }

    }
    textarea {
        resize: none;
    }
    small {
        color: red;
    }
    @keyframes shakeInvalid {
        0% {
            transform: translateX(-5px);    
        }
        20% {
            transform: translateX(6px);    
        }
        40% {
            transform: translateX(-7px); 
        }
        60% {
            transform: translateX(5px);    
        }
        80% {
            transform: translateX(-4px);    
        }
        100% {
            transform: translateX(0px);    
            
        }
    }
`;
