import styled from 'styled-components';

const Section = styled.footer`
    text-align: center;
    font-weight: bold;
    background: ${props =>  props.theme.colors.default};
  
    padding: 10px 0;

    a { 
        color: ${props =>  props.theme.colors.secundary};
    }

    span {
        text-align: left;
        color: ${props =>  props.theme.colors.secundary};

        &:hover {
            color: ${props =>  props.theme.colors.primary};
        }
    }


`;

export { Section };