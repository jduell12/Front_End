import styled from 'styled-components';

export const Errors = styled.div`
    color: red;
    font-size: 1rem;
    margin: 3%;
`;

export const OuterDiv = styled.div`

`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid black;
    border-radius: 6px;
    box-shadow: 7px 8px 25px -1px black;
    margin: 3%;
    padding: 3%;
   background: #3B945E;
`;

export const StyledBtn = styled.button`
    margin: 0 40%;
    background: #6E9B7B;
    color: white;
    font-size: 1.75rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 3px solid #72CB91;

    &:hover{
        cursor: pointer;
    }

    &:disabled{
        opacity: 0.25;
        border: 3px solid red;
    }
`;

export const StyledInput = styled.input`
   margin: 3% 20%;
   text-align: center;
   background: #E3E7D9;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    color: white;
`;