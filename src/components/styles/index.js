import styled from 'styled-components';



const Container = styled.div``;

const BtnPrimary = styled.a`
    position: relative;
    margin: 20px 10px;
    padding: 10px 25px;
    background: ${props => props.theme.colors.primary};
    font-family: Roboto;
    color: ${props => props.theme.colors.secundary};
    letter-spacing: 2px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: ${props => props.theme.colors.secundary};
        color: ${props =>  props.theme.colors.primary};
        font-weight: bold;
        border: 1px solid ${props =>  props.theme.colors.primary};
    }
`;

const Section = styled.div`
    padding: 8em 0;
    background: ${props => props.theme.colors.secundary};
`;

const SectionDefault = styled.div`
    padding: 8em 0;

    h3 {
        text-align: center;
        text-transform: uppercase;
    }
`;

const InputRadio = styled.input.attrs(
    props => ({
        type: "radio",
        name: props.name
    })
)`
    width: 0;
    opacity: 0;
    margin: 0;

    &:checked  + label {
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
        font-size: 18px;
    } 
`;

const Label = styled.label`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;
`;

const GridTwo = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;

    img {
        margin: 20px 0;
        width: 100%;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(${props => props.gridsize}, 1fr);
    text-align: ${props => props.text ? props.text: 'left'};
`;

//* Components UI FORM *//
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

    h3 {
        margin: 0 10px;
        font-size: 20px;
        color: ${props =>  props.theme.colors.secundary};
    }

    img {
        position: absolute;
    }
`;

const Icon = styled(Icons)`
    h4 {
        color: ${props =>  props.theme.colors.primary}
    }
`;

export { Container, 
        BtnPrimary, Section, InputRadio, 
        Label, GridTwo, SectionDefault, Grid
        ,Form, Input, TxtArea, Icons, Icon
    };