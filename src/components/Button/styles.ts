import styled from 'styled-components';

export const Container = styled.button`
    text-decoration: none;
    border-radius: 8px;
    text-transform: uppercase;
    background: var(${ props => props.color});
    color: white;
    padding: 20px 40px;
    transition: .3s;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
        transform: translateY(-3px);
    }
`;