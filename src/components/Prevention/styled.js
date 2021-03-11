import styled from 'styled-components';


const Section = styled.div`
    padding: 8rem 0;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
`;

const Item = styled.div`
    width: 320px;
    height: 320px;
    margin: 30px 20px;
    text-align: center;

    img {
        width: 100px;
    }

    h3 {
        font-size: 20px;
        margin: 10px 0;
        font-weight: 600;
    }
`;

export { Section, Content, Item};