import style from "styled-components";

export const Card = style.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 800px){
        flex-direction: column;
    }
    

`;

const CardAboutMe = style(Card)
const ContainerAboutMe  = style.div`
    background-color:#FFF;
    width: 80%;
    border-radius: 20px;
    padding: 10px;

    
`
    




export {ContainerAboutMe};