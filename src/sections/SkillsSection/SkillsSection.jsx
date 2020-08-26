import React from 'react';
import {H1,H2, H3,P} from '../../components/typography';
import {Spacing, HorizontalSpacing, Section, Box, BoxItem, BoxSpacing, ContainerContent} from '../../components/box';
import {Standard} from '../../components/cards/standardCard/StandardCardStyle';
import {ContainerSkills, Span} from './SkillsSectionPosition';
import {SkillsCard01, SkillsCard02, SkillsCard03} from '../../components/cards/skillsCard/SkillsCard';
import {Container, Row, Column} from '../../components/Grid'


function SkillsSection(){
    return(
        <Section>
            <ContainerContent>
                <Span><H2>Habilidades</H2></Span>
                <Container>
                    <Row>
                        <Column mobile='12' tablet='6' desktop='4'><SkillsCard01/></Column>
                        <Column mobile='12' tablet='6' desktop='4'><SkillsCard02/></Column>
                        <Column mobile='12' tablet='6' desktop='4'><SkillsCard03/></Column>
                    </Row>
                </Container>
            </ContainerContent>

        </Section>


    )
}

export {SkillsSection};