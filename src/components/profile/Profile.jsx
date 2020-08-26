import React from 'react';
import {Box, Spacing, Section} from '../box';
import {ImgProfile} from './ProfileStyle';
import {H1, H4} from '../typography';
import Button from '../Button';
import {Container, Column, Row} from '../Grid'

function Profile(){
    return(
        <Section>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
           
           <Container>
               <Row center={true}> 
                   <Column mobile='4'><ImgProfile/></Column>
               </Row>   
               <Spacing/>

               <Row center={true}>
                   <Column align={'center'}><H1>Michel Elesbão</H1>
                   <Spacing/>
                   <H4>Web Developer</H4>
                   <Spacing/>
                   <a href='https://www.linkedin.com/in/michel-elesb%C3%A3o-6b0220156/' target='blank'><H1><i class="fab fa-linkedin-in"></i></H1></a>
                   <Spacing/>
                   <Button type="primary">Contato</Button></Column>
               </Row>
           </Container>
           
           <Spacing/>
           
           <Spacing/>
           
           <Spacing/>
           
           <Spacing/>
           
        </Section>

    )
    
}

export {Profile};

