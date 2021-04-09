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

const Form = styled.form`
    text-align: center;
`;

const Input = styled.input`
    width: 60%;
    margin: 1em 10px;
    background: none;
    border: 1px solid ${props =>  props.theme.colors.primary};
    border-radius: 20px;
    padding: 10px;
    font-family: Roboto;
    font-weight: 300;
    color: ${props =>  props.theme.colors.secundary};
    text-align: center;

    &:focus {
        border: none;
        outline: none;
        border: 2px solid ${props =>  props.theme.colors.primary};
    }

    &::placeholder {
        color: ${props =>  props.theme.colors.info};
    }
`;

const TxtArea = styled.textarea`
    width: 60%;
    margin: 1em 10px;
    background: none;
    border: 1px solid ${props =>  props.theme.colors.primary};
    border-radius: 20px;
    padding: 10px;
    font-family: Roboto;
    font-weight: 400;
    color: ${props =>  props.theme.colors.secundary};

    &:focus {
        border: none;
        outline: none;
        border: 2px solid ${props =>  props.theme.colors.primary};
    }

    &::placeholder {
        color: ${props =>  props.theme.colors.info};
    }
`;


const Icons = styled.div`
    margin: 20px 80px;

    h4 {
        margin: 0 40px;
        font-size: 16px;
        color: ${props =>  props.theme.colors.secundary};
    }

    img {
        position: absolute;
    }
`;



export {Section, Content, Form, Input, TxtArea, Icons}; 