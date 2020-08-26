import style from 'styled-components';



const BoxSkills = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`


export const BoxText = style.div`
    margin: 15px;
    text-align: center;

    }
`







export {BoxSkills};