import styled from 'styled-components';


const Nav = styled.nav`
   
    ul { 
        list-style-type: none;
        

        &:after {
            content: "";
            display: block;
            clear: both;
        }
    }

    li {
        float: left;
        width: 14%;

       
    }

    a { 
        
        padding: 10px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        text-decoration: none;
        display: block;
        font-size: 14px;
        cursor: pointer;
        color: ${props =>  props.theme.colors.secundary};

        &:hover {
            background: ${props =>  props.theme.colors.primary};
        }
    }
`;

export { Nav };