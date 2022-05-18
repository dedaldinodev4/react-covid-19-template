import styled from 'styled-components';


const Section = styled.div`
    padding: 8em 0;
    background: ${props => props.theme.colors.secundary};

    .infection-content {
        margin: 80px 0;
        width: 100%;
        height: 200px;
        justify-content: center;
        align-items: center;
    }
`;


const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    height: 350px;
    justify-items: center;
    align-items: center;
`;

const Box = styled.div`
    height: 15px;
    width: 60%;
    flex: 0 0 40px;
    background: ${props => props.color ? props.color : "none"};
    margin: 10px 0; 
    border-radius: 4px;
    justify-content: center;
    border: ${props => props.border? "2px solid #f5b8b8" : "none"};

    h4 {
        flex-wrap: wrap;
        margin-left: 30px;
        line-height: 15px;
        text-align: left;
        font-size: 12px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.secundary};

        span {
            float: right;
            text-align: right;
            margin: 0 10px;
        }
        
    }
    
`;



const BoxDefault = styled(Box)`
    
    h4 {
        margin-left: 30px;
        line-height: 15px;
        text-align: left;
        font-size: 12px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
    }
`;





export {Section, Item, Box, BoxDefault};