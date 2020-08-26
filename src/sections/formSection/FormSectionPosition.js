import style from 'styled-components'

export const Span = style.div`
    margin-top: 30px;
    margin-bottom: 30px;
    
`

export const ContainerForms = style.div`
    clear: both;
    display: flex;
    flex-direction: column;
    align-items: top;
    margin: 0px 1.5% 0 1.5%;
    padding-left: 2%;

    
   
    
`

export const Fieldset = style.fieldset`

    width: 100%;
    border: none;


`


export const BoxForm = style.div`
    display: flex;
    @media(max-width: 800px){
        align-items: center;
        flex-direction: column;
    }


`

export const BoxInput = style.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 700px){
        flex-direction: column;
    }


`
