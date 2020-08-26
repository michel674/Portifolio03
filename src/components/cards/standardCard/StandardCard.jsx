import React from 'react';
import {StandardCard} from './StandardCardStyle'
import Button from '../../Button'
import {ProfileImage} from '../../images/Images-style'

function Card(){
    return(
        <StandardCard type='primary'>
            <Button type='primary'>Clique</Button>
            <ProfileImage></ProfileImage>
            
        </StandardCard>
    )
}


export {Card};
