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
        font-family: Roboto, sans-serif;
        background: ${props =>  props.theme.colors.hover};
        margin: 0;
    }

    html, body, ul, ol, li, form, fieldset, legend {
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        padding: 0 3rem;
    }

    #navbar {
        background: ${props => props.theme.colors.primary};
        padding: 0;
        ul { 
            list-style-type: none;
            padding: 0;
            

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
            color: ${props =>  props.actived ? 
                props.theme.colors.hover: props.theme.colors.secundary};

            &:hover {
                transform: scale(0.9);
            }
        }
    }

    .nav-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #e67e22;
    }
    
    .nav-wrapper > nav {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .nav-wrapper > nav > a {
        font-weight: bold;
        text-decoration: none;
        font-size: 40px;
        color: #fff;
        margin: 30px;
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
    nav a#toggle-btn {
        display: none;
    }

    @media screen and (max-width: 768px) {

        nav {
            height: auto;
            border-bottom: 0;
        }
    
        nav ul {
            display: none;
            height: auto;
        }
    
        nav li {
            width: 100%;
            float: left;
            position: relative;
        }

        nav a {
            text-align: left;
            width: 100%;
            text-indent: 25px;
            background: #282627;
            color: #809789;
    
        }
    
    
    
        nav a#toggle-btn {
            
        
            &:after {
                content: "|||";
                transform: rotate(-90deg);
                width: 40px;
                height: 40px;
                display: inline-block;
                position: absolute;
                right: 5px;
                top: 20px;
            }
        }
    
        nav a#toggle-btn {
            display: block;
            background: ${props => props.theme.colors.primary};
            color: #fff;
            width: 100%;
            position: relative;
            &:hover {
                transform: scale(1);
            }
        }
    
        .menu {
            zoom: 1;
            
            &:before{
                content: "";
                display: table;
            }

            &:after {
                clear: both;
                content: "";
                display: table;
            }
        }
    
        
    }

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
            grid-template-columns: repeat(2, 2fr);
            text-align: left;
    
        }

    }

    @media screen and (max-width: 579px) {
        .services-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
    
        }
        
    }

    @media screen and (max-width: 768px) {
    
        .about-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
        }
    }

    @media screen and (max-width: 768px) {
    
        .contact-content {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
        }
    }

    /* loader */
    .loader {
        width: 10px;
        height: 10px;
        margin: 40px auto;
        border-radius: 50%;
        background: ${props => props.theme.colors.primary};
    }
    
    /* btn primary */
    .btnPrimary {
        position: relative;
        margin: 20px 10px;
        padding: 10px 25px;
        background: ${props => props.theme.colors.primary};
        font-family: Roboto;
        color: ${props => props.theme.colors.secundary};
        letter-spacing: 2px;
        font-size: 14px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
    }

    .label {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 500;
        margin-right: 10px;
        cursor: pointer;
    }

    .info-contents {
        margin: 50px 0;
        width: 500px;
    }
    
    
 `;

 