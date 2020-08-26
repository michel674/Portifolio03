import style from "styled-components";




const getType = type =>{
    if (type ==="primary"){
        return`
            &:before {
                content: ' ';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #FFFF00; 
                border-radius: 25px;
                width: 75%;
                float:left;
            }
            
        `
    }

    if (type ==="secondary"){
        return`
            &:before {
                content: ' ';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #FF0000; 
                border-radius: 25px;
                width: 80%;
            }
            
        `
    }

    if (type ==="tertiary"){
        return`
            &:before {
                content: ' ';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #0000FF; 
                border-radius: 25px;
                width: 90%;
            }
            
        `
    }
}






const ProgressBarColor = style.div`
    ${(props) => getType(props.type)}


    


`


export default ProgressBarColor;