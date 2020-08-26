import style from 'styled-components';
import Map from '../../images/mapa.png';
import Mit from '../../images/mit.PNG';
import AtKearney from '../../images/atkearney.PNG';
import InternationalTeam from '../../images/internationalTeam.jpeg';
import BrazillianTeam from '../../images/brazillianTeam.jpeg';
import Interview from '../../images/entrevista.PNG';
import Negotiation from '../../images/negotiation.PNG';







export const HoverCardDiv01 = style.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: 1%;
    padding: 0px;
    background: white url(${Mit});
    background-position: 60% 40%;
    background-size: 140%; 
    border-radius: 20px;
    margin-bottom: 25px;
`


export const HoverCardDiv02 = style.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: 1%;
    padding: 0px;
    background: white url(${InternationalTeam});
    background-position: 20% 50%;
    background-size: 160%; 
    border-radius: 20px;
    margin-bottom: 25px;
`
export const HoverCardDiv03 = style.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: 1%;
    padding: 0px;
    background: white url(${BrazillianTeam});
    background-position: 45% 50%;
    background-size: 180%; 
    border-radius: 20px;
    margin-bottom: 25px;
`

export const HoverCardDiv04 = style.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: 1%;
    padding: 0px;
    background: white url(${AtKearney});
    background-position: 45% 50%;
    background-size: 130%; 
    border-radius: 20px;
    margin-bottom: 25px;
`
export const HoverCardDiv05 = style.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: 1%;
    padding: 0px;
    background: white url(${Interview});
    background-position: 55% 50%;
    background-size: 155%; 
    border-radius: 20px;
    margin-bottom: 25px;
`
export const HoverCardDiv06 = style.div`
    width: 100%;
    height: 250px;
    position: relative;
    margin: 1%;
    padding: 0px;
    background: white url(${Negotiation});
    background-position: center;
    background-size: 160%; 
    border-radius: 20px;
    margin-bottom: 25px;
`

export const Overlay = style.div`
    width: 100%;
    height: 250px;
    opacity: 0%;
    transition:  0.5s opacity;
    position: relative;
    

    &:before{
        content: " ";
        position: absolute;
        top:0;
        left: 0;
        bottom: 0;
        right:0; 
        background-color: #0000FF;
        border-radius:20px;
        opacity: 80%;

    }

    &:hover {
        opacity: 80%;
        cursor: pointer;
        

    }
`

export const BoxImage = style.div`
    width: 100%;

`

export const Tag = style.div`
    background-color: #FF5555;
    display: inline;
    padding: 8px;
    border-radius: 0  0 20px 20px;
    position: absolute;
    margin-left: 16px;


    `

