import style from "styled-components";

const buttonColor = {
    primary: {
        text: '#FFF',
        background: '#FF5555'
    },


}

const Button = style.button`
    border: 0;
    border-radius: 25px;
    color: ${props => buttonColor[props.type] ? buttonColor[props.type].text : '#333333'};
    background-color: ${props => buttonColor[props.type] ? buttonColor[props.type].background : '#FDFDFD'};
    font-weight: bold;
    transition: 0.3s all;
    padding: 16px;
    cursor: pointer;
    outline: none;
    text-align: center;
    
    &:hover{
        background: #dd3333;
        transform: scale(1.08);
    }
`   



export default Button;
