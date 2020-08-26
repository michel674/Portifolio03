import style from 'styled-components';



export const Box = style.div`
    display: flex;
    align-items: top;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;

    }

`
export const ContainerAboutMe = style.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    padding-bottom: 30px;
    margin: 0 3%;
    
`

export const Span = style.div`
    margin-bottom: 100px;
    
`

export const SpanFloat = style.div`
    float: left;
`

