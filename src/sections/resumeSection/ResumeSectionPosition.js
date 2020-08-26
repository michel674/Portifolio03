import style from 'styled-components'

export const ContainerResume = style.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    padding-bottom: 30px;
    margin: 0 3%;


    

    




`

export const Span = style.div`
    margin-bottom: 50px;
    `

    export const BoxResume = style.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        @media(max-width: 700px){
            flex-direction: column;
            align-items: center;

        }
    `