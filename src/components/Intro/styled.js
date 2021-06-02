import styled from 'styled-components';


const Cover = styled.div`
    height: 100%;
    background: url('./assets/images/${props => props.image}.jpg') no-repeat scroll center center;
    background-size: cover;
    display: block;
    width: 100%;
    min-height: 800px;
    margin: 0;
    padding: 0;
    overflow-y: hidden; 
`;

const Text = styled.div`
    position: absolute;
    text-align: center;
    color: ${props =>  props.theme.colors.secundary};
    vertical-align: middle;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-family: "Roboto";

    h1 {
        color: ${props =>  props.theme.colors.secundary};
        margin: 0;
        font-size: 70px;
        letter-spacing: -3px;
    }

    h3 {
        color: ${props =>  props.theme.colors.secundary};
        margin: 10px 0;
        font-size: 18px;
    }
`;


const Container = styled.div`
    margin-top: 34vh;

    .btnStart {
        position: relative;
        margin: 20px 10px;
        padding: 15px 20px;
        background: ${props => props.theme.colors.primary};
        font-family: Roboto;
        color: ${props => props.theme.colors.secundary};
        letter-spacing: 2px;
        font-weight: bold;
        font-size: 13px;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        bottom: -30px;
    }
`;


export { Cover, Container, Text};