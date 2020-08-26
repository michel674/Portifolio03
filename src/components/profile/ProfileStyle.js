import style from 'styled-components';
import ProfileImage from '../images/perfil.jpg'

const ImgProfile = style.div`
    width: 150px;
    height: 150px;
    background: green url(${ProfileImage});
    background-size: 200px;
    background-position: 60% 0%;
    border-radius: 50%;
`






export {ImgProfile};