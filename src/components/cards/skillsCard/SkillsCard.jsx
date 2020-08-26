import React, { Fragment } from 'react';
import {H3,P} from '../../typography';
import {Box, BoxItem, BoxSpacing, Spacing, HorizontalSpacing} from '../../box';
import {StandardCard} from '../standardCard/StandardCardStyle';
import {EditingImage, CodingImage, EnglishImage} from '../../images/Images-style';
import {BoxSkills, BoxText} from './SkillsCardPosition';


function SkillsCard01(){
    return(
        <StandardCard type="primary">
            <Box horizontal={false} center={true}>
                <BoxSpacing/>
                <EnglishImage/>
                <BoxSpacing/>
                <H3 color='white'>Inglês</H3>
                <BoxText>
                    <P color='white'>Aprendi a falar inglês para abrir o meu leque de opções ao aprender algo novo. O idioma me ajudou em vários momentos de comunicação</P>
                </BoxText>
            </Box>
        </StandardCard>
        

    )
    
}

function SkillsCard02(){
    return(
        <StandardCard type="secondary">
            <Box horizontal={false} center={true}>
                <BoxSpacing/>
                <CodingImage/>
                <BoxSpacing/>
                <H3 color='blue'>Programação</H3>
                <BoxText>
                    <P color="blue">No meu trabalho atual eu consigo desenvolver muito mais minhas habilidades de programação, em especial o Front-End</P>

                </BoxText>
            </Box>
        </StandardCard>


    )
}


function SkillsCard03(){
    return(
        <StandardCard type="tertiary">
            <Box horizontal={false} center={true}>
                <BoxSpacing/>
                <EditingImage/>
                <BoxSpacing/>
                <H3 color='white'>Edição</H3>
                <BoxText>
                    <P color="white">Gosto de editar vídeos para apresentar o que eu faço. Os vídeos são a melhor forma de passar experiências e emoções;</P>
                </BoxText>
            </Box>
        </StandardCard>


    )
}

export {SkillsCard01, SkillsCard02, SkillsCard03};

