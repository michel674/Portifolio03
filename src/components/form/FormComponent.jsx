import React, {useState} from 'react';
import {InputElement, Form, TextArea} from './ImputTextStyle';
import {Container, Column, Row} from '../Grid';
import Button from '../Button';
import {Spacing, HorizontalSpacing} from '../../components/box';


function FormElement(sendingMessage){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) =>{
        const data = {name, email, subject,message}
        event.preventDefault();
        alert(`Obrigado, ${data.name}! Em breve retorno o contato para ${data.email}.`);

    }
    return(
    <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Column mobile='12' tablet='12' desktop='5.8'>
                        <InputElement 
                            placeholder="nome"
                            value={name}
                            onChange={(event) => {setName(event.target.value);
                                console.log(name);
                            }}
                            />
                    </Column>

                    <Column desktop='0.4'>
                        <HorizontalSpacing/>
                    </Column>

                    <Column mobile='12' tablet='12' desktop='5.8'>
                        <InputElement 
                            placeholder="email" 
                            type="email"
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
                            />

                    </Column>

                </Row>
                    
                
                    <Spacing/>
                <Row>
                    <Column mobile='12' tablet='12' desktop='12'>
                        <InputElement 
                            placeholder="Assunto"
                            value={subject}
                            onChange={(event)=> {setSubject(event.target.value)}}
                            />
                    </Column>
                
                
                    <Column mobile='12' tablet='12' desktop='12'>
                        <TextArea 
                            placeholder="mensagem"
                            value={message}
                            onChange={(event)=>{setMessage(event.target.value)}}
                            />
                       
                        <Button type='primary' onSubmit={handleSubmit}>Enviar mensagem</Button>
                    </Column>
                </Row>

                
            </Container>
        </Form>
    )
}

export {FormElement};


        
