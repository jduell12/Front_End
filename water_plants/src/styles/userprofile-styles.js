import styled from 'styled-components';

export const Card = styled.div`
    margin: 5% 25%;
    padding: 3%;
    background: #3B945E;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    opacity: 0.9;

`

export const StyledDetails = styled.div`
    margin: 2% 0;
    font-size: 2rem;
`

export const StyledTitle = styled.h1`
    margin: 1%;
`

export const StyledBtn = styled.button`
    background: #6E9B7B;
    color: white;
    font-size: 1.75rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 2%;

    &:hover{
        cursor: pointer;
        background: white;
        color: #6E9B7B;
    }
`