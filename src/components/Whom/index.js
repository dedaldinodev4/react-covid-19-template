import React from 'react'
import {Container, Section, GridTwo} from '../styles';
import {Content, Image} from './styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFileContract,faEye} from '@fortawesome/free-solid-svg-icons';

const Whom = (props) => {
    return (
       <Section>
           <Container className="container">
                <GridTwo className="about-content">
                    <Content>
                        <h2>
                            <FontAwesomeIcon icon={faFileContract} />
                            &nbsp;&nbsp;{props.data.mission.title}
                        </h2>
                        <p>
                            {props.data.mission.paragraph}
                            {props.data.mission.paragraph}
                            {props.data.mission.paragraph}
                        </p>

                        <h2>
                            <FontAwesomeIcon icon={faEye} />
                            &nbsp;&nbsp;
                           {props.data.vision.title}
                        </h2>
                        <p>
                            {props.data.mission.paragraph}
                            {props.data.vision.paragraph}
                        </p>
                    </Content>
                    <div>
                        <Image />
                    </div>
                </GridTwo>
           </Container>
           
       </Section>
    )
}

export default Whom;
