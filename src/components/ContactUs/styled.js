import styled from 'styled-components';

const Section = styled.div`
    padding: 8rem 0;  

    h3 {
        text-align: center;
    }
`;

const Content = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
 
`;



export {Section, Content}; 