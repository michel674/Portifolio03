import React from 'react';
import Button from '../../Button';
import ProgressBarMolecule02 from '../../ProrgessBar/ProgressBarMolecule02'
import {P} from '../../typography'
import {ContainerAboutMe, ContainerContent, Card} from './AboutMeStyle'
import {Box, BoxItem, BoxSpacing, Spacing} from '../../box';

function AboutMeCard() {
    return(
        <ContainerAboutMe>
            <Spacing />
            <Card horizontal={true}>
                <BoxSpacing />
                <BoxItem>
                    <P color={"blue"}>Eu gosto de fazer muitas coisas diferentes e estou sempre buscando formas de conectar esses interesses. Gosto muito de Tecnologia, Negócios e de pessoas! A primeira vista pode parecer um pouco desconexo mas ao longo dessa página vai ficar um pouco mais claro como eu faço atividades que juntam um pouco de tudo isso!</P>
                    <Spacing />
                </BoxItem>
                <BoxSpacing/>
                <BoxItem>
                <ProgressBarMolecule02 />
                </BoxItem>
                <BoxSpacing />
            </Card>
            {/* <ContainerContent>
                <P color={"blue"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aspernatur mollitia consequatur totam ea corrupti odit amet, labore fugit. Aliquid praesentium cupiditate reiciendis. Esse obcaecati odio laboriosam placeat officiis vel.</P>
                <Button type="primary">Cilque em mim!</Button>
            </ContainerContent>
             */}
        </ContainerAboutMe>


    )

    
}


export default AboutMeCard;