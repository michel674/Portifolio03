import React ,{useState} from 'react';
import {H2,H3,H4} from '../../components/typography';
import {Span,ContainerForms, Fieldset,Form, BoxForm, BoxInput} from './FormSectionPosition';
import {Spacing, HorizontalSpacing, Section,BoxItem, ContainerContent} from '../../components/box';
import {TextArea, InputElement} from '../../components/form/ImputTextStyle';
import {Container, Column, Row} from '../../components/Grid';
import Button from '../../components/Button';
import {FormElement} from '../../components/form/FormComponent'



function FormSection(sendingMessage){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    return(
        <Section>
            <ContainerContent>
                <Span><H2>Entre em contato</H2></Span>
                <Container>
                    <Row>
                        <Column mobile='12' tablet='4' desktop='4'>
                            <Span><H3 color='blue'>Vamos conversar sobre oportunidades!</H3></Span>
                        </Column>
                        
                        <Column mobile='12' tablet='8' desktop='8'>
                            <FormElement sendingMessage={sendingFormMessage}/>

                        </Column>
                    
                    </Row>
                </Container>               

                </ContainerContent>

        </Section>

    )
}

function sendingFormMessage(data){
    console.log(data);
    alert(data);
  }
  

export {FormSection};