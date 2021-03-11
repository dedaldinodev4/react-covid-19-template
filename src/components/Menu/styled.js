import styled from 'styled-components';


const Nav = styled.nav`
background-color: none;
    ul { 
        list-style-type: none;
        padding: 0;
    }

    a { 
        
        padding: 10px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        display: block;
        font-size: 16px;
        cursor: pointer;
        color: ${props =>  props.theme.colors.primary};

        &:hover {
            color: ${props =>  props.theme.colors.secundary};
        }
    }
`;

export { Nav };