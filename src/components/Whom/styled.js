import styled from 'styled-components';


const Content = styled.div`
    h2 {
        
        color: ${props => props.theme.colors.hover};
       
    }
`;
const Image = styled.img.attrs({
    src: "../assets/images/bgAbout.jpg",
    alt: "about"
})``;

export {Content, Image};