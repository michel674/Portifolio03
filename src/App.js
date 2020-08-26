import React, {Component, Fragment} from 'react';
import Button from './components/Button';
import ProgressBarMolecule02 from './components/ProrgessBar/ProgressBarMolecule02'
import AboutMeCard from './components/cards/AboutMeCard/AboutMeCard'
import {Card} from './components/cards/standardCard/StandardCard.jsx'
import {SkillsCard} from './components/cards/skillsCard/SkillsCard'
import {ResumeCard} from './components/cards/resumeCard/ResumeCard'
import {HoverCard} from './components/cards/hoverCard/HoverCard.jsx'
import {InputElement} from './components/form/inputText';
import {Profile} from './components/profile/Profile';
import {HeaderItem} from './sections/header/Header';
import {AboutMeSection} from './sections/aboutMeSection/AboutMeSection';
import {SkillsSection} from './sections/SkillsSection/SkillsSection';
import {ResumeSection} from './sections/resumeSection/ResumeSection';
import {BookSection} from './sections/bookSection/BookSection';
import {FormSection} from './sections/formSection/FormSection';
import {Spacing, Box, Main, Body} from './components/box';
import {SideMenu} from './sections/sideMenu/SideMenu';
import {Html} from './components/typography';
import {createGlobalStyle} from 'styled-components';
import {Column, Row, Container} from './components/Grid'


const GlobalStyle = createGlobalStyle`
  html{
    font-size: 20px;
  }




@media (min-width: 0px){
  html{
    font-size: 12px;
  }

}


@media (min-width: 768px){
  html{
    font-size: 14px;
  }

}

@media (min-width: 1024px){
  html{
    font-size: 16px;
  }

}


`


class App extends Component {
  render() { 
    return ( 
      <Body>
        <GlobalStyle/>
        <Container paddingNone={true}>
          <Row>
            <Column mobile='0' tablet='3' desktop='2.5' paddingNone={true}>
              <SideMenu/>
            </Column>

            <Column mobile='12' tablet='9' desktop='9.5' paddingNone={true}>
              <Main>
                <HeaderItem/>
                <AboutMeSection/>
                <SkillsSection/>
                <ResumeSection/>
                <BookSection/>
                <FormSection />
            </Main>
            </Column>

          </Row>
        </Container>
        
     </Body>

     );
  }
}


 
export default App;




