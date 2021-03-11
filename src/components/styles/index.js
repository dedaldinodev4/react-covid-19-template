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

export { Container, BtnPrimary};