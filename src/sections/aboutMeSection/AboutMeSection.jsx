import React from 'react';
import {H1,H2} from '../../components/typography';
import AboutMeCard from '../../components/cards/AboutMeCard/AboutMeCard';
import {ImgProfile} from '../../components/profile/ProfileStyle';   
import {Box, Span,SpanFloat, ContainerAboutMe} from './AboutMePosition'
import {Spacing, HorizontalSpacing, Section, ContainerContent} from '../../components/box'


function AboutMeSection(){
    return(
    <Section>
        <ContainerContent>
           <Span><H2>Sobre Mim</H2></Span> 
        <Box>
            <ImgProfile/>
            <Spacing/>
            <Spacing/>
            <HorizontalSpacing/>
            <AboutMeCard/>
        </Box>
        
        <Spacing/>
        
        </ContainerContent>

        
        
    </Section>

        

    )



}

export {AboutMeSection};