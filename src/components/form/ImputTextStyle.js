import style from 'styled-components';


export const TextArea = style.textarea`
    background-color: #FFFFFF;
    border: 0px;
    margin: 15px 0px;
    padding: 30px 0px 15px 5px;
    border-radius: 15px;
    box-shadow: 0px 4px 7px rgba(0,0,0,0.1);
    display: inline-block;
    width: 100%;
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #BBBBBB;
    outline: none; 
    rows: 5;
    height: 200px;
    `

export const InputElement = style.input`
    background-color: #FFFFFF;
    border: 0px;
    margin: 5px 0px;
    padding: 15px 0px 15px 5px ;
    
    border-radius: 15px;
    box-shadow: 0px 4px 7px rgba(0,0,0,0.1);
    display: inline-block;
    width: 100%;
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #BBBBBB;
    outline: none; 
    float: ${props => props.floatRifht?'right': 'left'};
    

`

export const Form = style.form`
    width: 100%;
    border: none;
`