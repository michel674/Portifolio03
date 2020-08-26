import style from 'styled-components';


export const SideSection = style.section`
    position: sticky;
    top:0;
    width: 100%;
    background-color: ${(props) => props.backgroundColor? '#202244;': ';'}
    height: 100vh;
    overflow-y: scroll;
    @media(max-width: 768px){
        display: none;
    }
    

`
export const Ul = style.ul`
    height: auto;
    padding-left:0px;
`

export const Li = style.li`
    font-weight: bold;
    font-size: 1em;
    list-style: none;
    text-align: left;




`

export const A = style.a`
    text-decoration: none;
    display: flex;
    justify-content: flex-start;

`
export const I = style.i`
    margin-right: 8%;
    color: #EEAD2D;
`
export const Copy = style.p`
    color: #CCCCCC;
    font-size: 18px;	
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    text-align: center;
    `

export const CenterSpan = style.span`
    display: flex;
    align-items: baseline;

`
export const DotTitle = style.p`
    display: inline;
    color: #FF0000;
    font-size: 2em;	
    font-family: 'Roboto', sans-serif;
    margin: 0px;

    `
