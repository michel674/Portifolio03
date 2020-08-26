import React from 'react';
import {H1,H2} from '../../components/typography';
import {Spacing, HorizontalSpacing, Section, ContainerContent} from '../../components/box';
import {ContainerBooks, Span, ContainerCards} from './bookSectionPosition';
import {HoverCard01,HoverCard02, HoverCard03, HoverCard04, HoverCard05, HoverCard06} from '../../components/cards/hoverCard/HoverCard';
import {Container, Row, Column} from '../../components/Grid'




function BookSection(){
    return(
        
        <Section>
            <ContainerContent>
            <Span><H2>Projetos e Momentos</H2></Span>
                <Container>
                    <Row>
                        <Column desktop='4' tablet="6" mobile="12"><HoverCard01/></Column>
                        <Column desktop='4' tablet="6" mobile="12"><HoverCard02/></Column>
                        <Column desktop='4' tablet="6" mobile="12"><HoverCard03/></Column>
                        <Column desktop='4' tablet="6" mobile="12"><HoverCard04/></Column>
                        <Column desktop='4' tablet="6" mobile="12"><HoverCard05/></Column>
                        <Column desktop='4' tablet="6" mobile="12"><HoverCard06/></Column>
                    </Row>
                    
                    
                </Container>
            </ContainerContent>
                
        </Section>


    )
}

export {BookSection};