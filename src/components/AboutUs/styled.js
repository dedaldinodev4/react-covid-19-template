import styled from 'styled-components';

const AboutSection = styled.div`
    background: ${props => props.theme.colors.bg_secundary};
    padding: 8rem 0;
`;

const AboutContent = styled.div`

    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;

    div img {
        width: 600px;
    }
`;

const Image = styled.img.attrs({
    src: "../assets/images/bgAbout.jpg",
    alt: "about"
})``;

export { AboutContent, AboutSection, Image};