import React from 'react';
import {H1,H2, H3, H4, P} from '../../components/typography';
import {Spacing, HorizontalSpacing, Section, Box} from '../../components/box';
import {ContainerResume, Span, BoxResume} from './ResumeSectionPosition';
import {ResumeCard01, ResumeCard02} from '../../components/cards/resumeCard/ResumeCard';
import {StandardCard} from '../../components/cards/standardCard/StandardCardStyle';
import {Container, Column, Row} from '../../components/Grid'


function ResumeSection(){
    return(
        <Section>
            <ContainerResume>
                <Span><H2>Experiências </H2></Span>
                <Container>
                    <Row>
                        <Column  mobile='12' tablet='6' desktop='6'><ResumeCard01/></Column>
                        <Column mobile='12' tablet='6' desktop='6'><ResumeCard02/></Column>
                    </Row>
                    
                </Container>


            </ContainerResume>
        </Section>
    )
}

export {ResumeSection};