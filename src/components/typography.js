import style from "styled-components";

const getSide = side =>{
    if (side ==='right'){
        return`
            float: right;
            flex-shrink: 2;
        `
    }
    if (side ==='left'){
        return`
            float: left;
            flex-shrink: 2;
          `
    }

    
}

const getColor = color =>{
    if (color === 'blue'){
        return`
        color: #20005F;
        `
        
    }

    if (color === 'white'){
        return`
        color: #FFFFFF;
        `
    }

    if (color === 'gray'){
        return`
        color: #999999;
        `
    }
    

    return`color: #CCCCCC`
    
}

const Html = style.html`
    @media(min-width: 0px){
        font-size: 12px;
    }

    @media(min-width: 768px){
        font-size: 14px;
    }

    @media(min-width: 1024px){
        font-size: 16px;
    }

    

`


const H1 = style.h1`
    font-size: 2.5rem;	
	color: #FFFFFF;
	font-family: 'Roboto', sans-serif;
    margin: 0px;
`

const H2 = style.h2`
    font-size: 2.2rem;	
    color: #20005F;
    font-family: 'Roboto', sans-serif;
    margin: 40px 10px;
`

const H3 = style.h3`
    font-size: 1.6rem;	
    ${(props)=>getColor(props.color)}
    font-family: 'Roboto', sans-serif;
    ${(props)=>getSide(props.side)}
    margin: 0px;
    padding: 0px;
    font-weight: bold;
`

const H4 = style.h4`
    font-size: 1.2rem;	
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    ${(props)=>getColor(props.color)}

    
`
const H5 = style.h5`
    font-size: 1.2rem;	
    color: #CCCCCC;
    font-family: 'Roboto', sans-serif;
    margin: 0px;

    &:hover{
        color: #EEAD2D;

    }
`



const P = style.p`
    font-size: 18px;	
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    ${(props)=> getColor(props.color)}
`


export {H1, H2, H3, H4, H5, P, Html};




