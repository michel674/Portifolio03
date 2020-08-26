import React, { Fragment } from 'react';
import {H3,H4,P} from '../../typography';
import {Box, BoxItem, BoxSpacing, Spacing, HorizontalSpacing} from '../../box';
import {StandardCard} from '../standardCard/StandardCardStyle';
import {Container} from './ResumeCardStyle';

function ResumeCard01(){
    return(
    
        <StandardCard>
            <Container>
                <H3 color='gray'>2014 - 2016</H3>
                <H3 color='blue'>Curso Técnico de Automação Industrial (SENAI)</H3>
                <P color='gray'>Curso de nível técnico com duração de 2 anos. Meu primeiro contato com automação</P>
            </Container>
            
            <Container>
                <H3 color='gray'>2018 - presente</H3>
                <H3 color='blue'>Engenharia Mecatrônica (Poli-USP)</H3>
                <P color='gray'>Aqui tenho a possibilidade de entender mais sobre tecnologias e como elas se relacionam com negócios</P>
            </Container>
            
            <Container>
                <H3 color='gray'>2020 - presente</H3>
                <H3 color='blue'>Taqtile Brasil</H3>
                <P color='gray'>Eu desenvolvo minhas habilidades de programação participando de projetos aqui</P>
            </Container>
        </StandardCard>
    
    )
}

function ResumeCard02(){
    return(
        <StandardCard>
                <Container>
                    <H4 color='gray'>2019 - 2020</H4>
                    <H3 color='blue'>Grupo de Negócios da USP</H3>
                    <P color='gray'>No GNP eu pude ter mais contato com empresas, gestores e empreendedores renomados do mercado</P>
                </Container>
            
                <Container>
                    <H4 H4 color='gray'>2018 - 2019</H4>
                    <H3 color='blue'>Grupo Fala Sério</H3>
                    <P H4 color='gray'>Grupo destinado a realizar projetos em escolas públicas a fim de aproximar os jovens de seus objetivos</P>
                </Container>
            
                <Container>
                    <H4 H4 color='gray'>2019</H4>
                    <H3 color='blue'>IDC Robocon 30</H3>
                    <P H4 color='gray'>Competição de robótica.</P>
                </Container>
            </StandardCard>
    )
}



export {ResumeCard01, ResumeCard02};