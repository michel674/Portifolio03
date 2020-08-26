import style from 'styled-components';
import Editing from '../../components/images/edicao-de-video.png' 
import Coding from '../../components/images/coding.png' 
import English from '../../components/images/english.jpg' 

export const ProfileImage = style.div`
    width: 150px;
    height: 150px;
    background-image: src('./perfil.jpg');


`

export const EditingImage = style.div`
    width: 150px;
    height: 150px;
    border: 1 px solid black;
    background-size: 150px;
    background-position: 0% 0%;
    background-image: url(${Editing});
    
`

export const CodingImage = style.div`
    width: 150px;
    height: 150px;
    border: 1 px solid black;
    background-size: 150px;
    background-position: 0% 0%;
    background-image: url(${Coding});
    
`

export const EnglishImage = style.div`
    width: 150px;
    height: 150pX;
    border: 1 px solid black;
    background-size: 150px;
    background-position: 10% 0%;
    background-image: url(${English});
    background-repeat: no-repeat;
    
`
