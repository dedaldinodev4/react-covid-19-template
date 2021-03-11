import styled from 'styled-components';

const Section = styled.div`
    padding: 8rem 0;  

    h3 {
        text-align: center;
    }
`;

const Content = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
`;

const Input = styled.input`
    width: 30%;
    margin: 2em 10px;
    background: none;
    border: 1px solid ${props =>  props.theme.colors.primary};
    padding: 10px;
    font-family: Roboto;
    font-weight: 400;
    color: ${props =>  props.theme.colors.primary};

    &:focus {
        border: none;
        outline: none;
        border: 2px solid ${props =>  props.theme.colors.primary};
    }

    &::placeholder {
        color: ${props =>  props.theme.colors.primary};
    }
`;

const TxtArea = styled.textarea`
    width: 20%;
    margin: 2em 10px;
    background: none;
    border: 1px solid ${props =>  props.theme.colors.primary};
    padding: 10px;
    font-family: Roboto;
    font-weight: 400;
    color: ${props =>  props.theme.colors.primary};
`;




export {Section, Content, Input, TxtArea}; 