import style from "styled-components";


const cardColor = {
    primary: {
        text: '#FFF',
        background: '#0000FF'
    },
    
    secondary: {
        text: '#FFF',
        background: '#FFFF00'
    },

    tertiary: {
        text: '#FFF',
        background: '#FF0000'
    },

    

}

const StandardCard = style.div`
    background-color:${props => cardColor[props.type]?cardColor[props.type].background: '#FFF'};
    display: inline-block;
    border-radius: 20px;    
    height: 100%;
    
`

export {StandardCard};


    
