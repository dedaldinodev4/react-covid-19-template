/**
 * @author Dedaldino Daniel
 * @package Covid
 * @license MIT
 * @version 0.1.1
 */

 import { createGlobalStyle } from 'styled-components';


 export default createGlobalStyle`

    @import url("https://fonts.googleapis.com/css?family=Roboto:100, 100i, 300, 300i,400,400i,500,500i,700,700i,900,900i"); 

    body {
        font-family: Roboto;
        background: ${props => props.theme.colors.bg_primary};
        margin: 0;
    }

    .container {
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        padding: 0 3rem;
    }

    @media screen and (max-width: 500px) {
        .container {
            padding: 0 2rem;
        }
    }
 
    h1,
    h2,
    h3 {
        font-weight: 300;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    h1 {
        font-size: 54px;
        color: ${props => props.theme.colors.primary};
    }
    h2 {
        font-size: 24px;
        color: ${props =>  props.theme.colors.primary};
        font-weight: 500;
        margin-bottom: 20px;
    }
    h3 {
        font-size: 28px;
        color: ${props =>  props.theme.colors.primary};
    }

    h4 {
        font-size: 20px;
        color: ${props =>  props.theme.colors.primary};
        font-weight: 400;
        margin-bottom: 0;
    }

    p {
        margin: 20px 0;
        color: ${props =>  props.theme.colors.font};
        line-height: 24px;
    }

    .container {
        margin-top: 34vh;
    }

    a { text-decoration: none; }

    @media screen and (min-width: 768px) {

        nav ul {
            display: flex;
            justify-content: space-around; 
        }
    
        nav ul li {
            flex: 1 1 0;
        }
    }
    
    .container {
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        padding: 0 3rem;
    }
    
    .container h2 {
        text-transform: uppercase; 
    }
    
    @media screen and (max-width: 580px) {
    
        .container {
            padding: 0 2rem;
        }
    }

    @media screen and (max-width: 768px) {
        .services-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            text-align: left;
    
        }
        
    }

    @media screen and (max-width: 580px) {
        .services-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
    
        }
        
    }

    @media screen and (max-width: 580px) {
    
        .about-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
        }
    }

    @media screen and (max-width: 580px) {
    
        .contact-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
        }
    }
    
    
    
 `;

 