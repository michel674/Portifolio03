import style from 'styled-components';






export const Container = style.div`
    max-width: 1360px;
    margin-right: auto;
    box-sizing: border-box;
    width: 100%;
    padding: ${props => props.paddingNone? ' ':'0 15px 0 15px'};
    
    
`;

export const Row = style.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};

`;

function getWidthGrid(value){
    if(!value) return;

    let width = value/12*100;
    return`flex-basis: ${width}%;`;
}


export const Column = style.div`
    padding: ${props => props.paddingNone? ' ':'.25rem;'};
    min-height: 1px;
    box-sizing: border-box;
    text-align: ${props => props.align ? props.align : 'left'};


    @media only screen and (max-width: 768px){
        ${({mobile})=> mobile && getWidthGrid(mobile)}
    }

    @media only screen and (min-width: 768px){
        ${({tablet})=> tablet && getWidthGrid(tablet)}
    }

    @media only screen and (min-width: 1000px){
        ${({desktop})=> desktop && getWidthGrid(desktop)}
    }



`
export const Center = style.div`
    margin: 0 auto;
    width: 100%;
`