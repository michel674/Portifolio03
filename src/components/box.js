import style from "styled-components";

export const Section = style.section`
    display: inline-block;
    width: 100%;
    background-color: ${(props) => props.backgroundColor? '#202244': ''};

`

export const Box = style.div`
    display: flex;
    flex-direction: ${props => props.horizontal ? 'row' : 'column'}; 
    align-items: ${props => props.center ? 'center' : 'flex-start'};
`;



export const BoxItem = style.div`
    flex: 1;
    align-items: flex-start;
`;

export const BoxSpacing = style.div`
    flex-basis: 16px;
`;

export const Spacing = style.div`
    padding-top: 16px;

`;

export const HorizontalSpacing = style.div`
    padding-right: 5%;
    display: inline-block;
`;

export const Main = style.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: space-betwwen;
`

export const Body = style.div`
    background-color: #DDDDDF;
    display: flex;
    margin: 0;
    padding: 0;
    

`

export const ContainerContent = style.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    padding-bottom: 30px;
    margin: 0 3%;

    `